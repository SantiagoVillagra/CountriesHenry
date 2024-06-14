const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
 
  dataBase.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
  });
};


/*
ID (Código de tres letras). *
Nombre. *
Imagen de la bandera. *
Continente. *
Capital. *
Subregión.
Área.
Población. *
*/