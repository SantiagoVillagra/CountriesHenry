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
    const { name, difficulty, duration, season, id } = info
    const newActivity = await Activity.create({ name, difficulty, duration, season })


    const mapeoId = id.map( async(id) => {
        await newActivity.setCountries(id)
    })
   
    return(newActivity)

}

module.exports = {
    getActivityControl,
    postActivitiesControl
}


/*


// 

// Controlador para crear una nueva actividad
const postActivitiesControl = async (activityData) => {
    const { name, difficulty, duration, season, id, } = activityData;

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