const axios = require("axios")
const {Country, Activity} = require("../db")


const getActivityControl = async () => {
  const activitiesBase = await Activity.findAll();

  if (activitiesBase.length) {
    return activitiesBase;
  } else {
    return "No se encontraron actividades";
  }
};

const postActivitiesControl = async (info) => {
    
    console.log(info)
    return({response: "postear actividades"})
}

module.exports = {
    getActivityControl,
    postActivitiesControl
}


/*


// Controlador para obtener todas las actividades
const getActivityControl = async () => {
    const activities = await Activity.findAll();
    return activities;
};

// Controlador para crear una nueva actividad
const postActivitiesControl = async (activityData) => {
    const { name, difficulty, duration, season, countryIds } = activityData;

    // Creación de la nueva actividad
    const newActivity = await Activity.create({ name, difficulty, duration, season });

    // Asociación de la actividad con los países proporcionados
    if (countryIds && countryIds.length > 0) {
        const countries = await Country.findAll({ where: { id: countryIds } });
        await newActivity.addCountries(countries);
    }

    return newActivity;
};

module.exports = {
    getActivityControl,
    postActivitiesControl
};
*/