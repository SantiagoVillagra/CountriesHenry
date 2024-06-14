const { Router } = require("express");
const {getAllCountriesHand, getCountryByIdHand} = require ("../handlers/countriesHandlers")



const countriesRoutes = Router();


countriesRoutes.get("/", (req,res) =>  getAllCountriesHand(req,res))

countriesRoutes.get("/:idCountries", (req,res) =>  getCountryByIdHand(req,res))


//countriesRoutes.get("/name?=", (req,res) =>  getCountryNameHand(req,res))


module.exports = countriesRoutes;

