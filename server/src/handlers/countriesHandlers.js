const {getCountriesByNameControl,getAllCountriesControl, getCountriesByIdControl } = require("../controllers/countriesControllers")




const getAllCountriesHand = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const response = await getCountriesByNameControl(name);
      res.status(200).json(response);
    } else {
      const response = await getAllCountriesControl();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


  const getCountryByIdHand = async (req, res) => {
    try {
      const { idCountries } = req.params;
      const response = await getCountriesByIdControl(idCountries);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  



module.exports = {
    getAllCountriesHand, getCountryByIdHand
}