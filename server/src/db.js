require("dotenv").config();
const { Sequelize } = require("sequelize");
const ActivityModel = require("./models/Activity")
const CountryModel = require("./models/Country")

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const dataBase = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});

CountryModel(dataBase)
ActivityModel(dataBase)

 const { Country, Activity } = dataBase.models;

Country.belongsToMany(Activity, { through: 'countryActivities' });
Activity.belongsToMany(Country, { through: 'countryActivities' });

module.exports = {
  ...dataBase.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: dataBase,     // para importart la conexión { conn } = require('./db.js');
};


//SET client_encoding TO 'utf8';