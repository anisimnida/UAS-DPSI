const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Adjust path if necessary

module.exports = (sequelize) => {
    const DataKelas = sequelize.define(
        'DataKelas',
        {
            nisn: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            jenisKelamin: {
                type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
                allowNull: false,
            },
            jenisKursus: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            programDipilih: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );

    return DataKelas;
};
