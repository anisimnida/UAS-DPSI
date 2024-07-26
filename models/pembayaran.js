const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Adjust path if necessary

module.exports = (sequelize) => {
    const Pembayaran = sequelize.define(
        'Pembayaran',
        {
            kode: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            nisn: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tingkat: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lamaBelajar: {
                type: DataTypes.INTEGER, // Or DataTypes.STRING if duration is not numeric
                allowNull: false,
            },
            angsuranPerBulan: {
                type: DataTypes.FLOAT, // Use appropriate type for monetary values
                allowNull: false,
            },
            angsuranKe: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sisa: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            total: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            tanggal: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        }
    );

    return Pembayaran;
};
