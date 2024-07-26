const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config(); // Load environment variables

const serviceUri = process.env.DB_URI;

const sequelize = new Sequelize(serviceUri, {
  dialect: "mysql",
  dialectModule: require("mysql2"),
  logging: function (msg) {
    console.log(msg);
  },
});

// Import models
const User = require("./user")(sequelize, DataTypes);
const Pendaftaran = require('./pendaftaran')(sequelize, DataTypes);
const Pembayaran = require('./pembayaran')(sequelize, DataTypes);
const DataKelas = require('./datakelas')(sequelize, DataTypes);

// Define relationships
async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");
    // Then synchronize all models
    await sequelize.sync({ force: true });

    console.log("Database synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

module.exports = {
  sequelize,
  User,
  Pendaftaran,
  Pembayaran,
  DataKelas,
  syncDatabase,
};
