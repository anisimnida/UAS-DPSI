const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Adjust path if necessary

module.exports = (sequelize) => {
    const Pendaftaran = sequelize.define(
        'Pendaftaran',
        {
            kode: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            nisn: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            jenisKelamin: {
                type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
                allowNull: false,
            },
            ttl: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            alamat: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            telepon: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tanggal: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            ayah: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pekerjaan: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );

    return Pendaftaran;
};
