const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
 
  dataBase.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.RANGE(DataTypes.INTEGER),
      allowNull: false,
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season:{
      type: DataTypes.ENUM ('summer', 'autumn','winter', 'spring' ),
      allowNull: false,
    },
      });
};
// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *