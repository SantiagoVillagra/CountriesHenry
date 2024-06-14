const { Router } = require("express");
const {getActivitiesHand, postActivitiesHand} = require("../handlers/activitiyHandler")


const activitiesRoutes = Router();

activitiesRoutes.get("/", (req,res) => getActivitiesHand(req,res))

activitiesRoutes.post("/" ,(req,res) => postActivitiesHand(req,res))


module.exports = activitiesRoutes