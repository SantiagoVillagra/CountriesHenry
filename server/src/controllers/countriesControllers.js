const axios = require("axios")
const { Op, where } = require('sequelize');
const apiUrl = "http://localhost:5000/countries";
const {Country, Activity} = require("../db")

const getAllCountriesControl = async () => {

    const countries = await Country.findAll();
 
if(countries.length === 0 ){
    
  const callApi = await axios.get(apiUrl);
  const { data } = callApi;
  const usefullData = data.map(
    ({
      cca3,
      name,
      flags,
      continents,
      capital,
      subregion,
      area,
      population,
    }) => ({
      id: cca3,
      name: name.common.toLowerCase(),
      image: flags.png? flags.png : "No se encuentra bandera de este pais",
      continent: continents[0]? continents[0] : "no se encuentra continente" ,
      capital: capital? capital: "no se encontro capital",
      subregion: subregion? subregion : "no se encontro subregion",
      area,
      population,
    })
  );
  await Country.bulkCreate(usefullData)
} 

return(
    await Country.findAll({
      include: {
          model: Activity,
          arttributes: ["name", "dificulty", "duration", "season"],
          through: {attributes: []}
      }
  })
)

};

const getCountriesByNameControl = async (name) =>{
 
    const countryRequire = await Country.findAll({
    where:{
      name: {[Op.like]: `%${name.toLowerCase()}%`
    }
  }
  })
  return (countryRequire)
 
}

const getCountriesByIdControl = async (id) =>{
  const countryId = await Country.findByPk(id)
    return(countryId)
}


module.exports = {
getAllCountriesControl,
getCountriesByNameControl,
getCountriesByIdControl

}