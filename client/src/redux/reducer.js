import { GET_COUNTRIES, SEARCH_COUNTRIES, COUNTRIES_ACTIVITY, ORDER_AND_FILTER } from '../redux/actionTypes'

const initialState = {
    allCountries: [],
    searchCountry: [],
    countriesAct: [],
    orderAndFilter: []

}
const rootReducer = (state = initialState, { type, payload }) => {
 switch(type){
    case GET_COUNTRIES:
        return {...state, allCountries: payload}
    
    case SEARCH_COUNTRIES:
        console.log("se recibio la action", payload)
        console.log(payload)
        return{...state, searchCountry: payload}

    case COUNTRIES_ACTIVITY:
        return{...state, countriesAct: payload}

    case ORDER_AND_FILTER:

        const {filterBy, filter, orderBy, order} = payload
        let copyState = [...state.allCountries]
        let filteredCountries = []

        if (filterBy !== "" && filterBy !== "Filtrar por") {
          if (filterBy === "Continente") {
            filteredCountries = copyState.filter(
              (country) => country.continents === filter
            );
          }
          if (filterBy === "Tipo") {
            filteredCountries = copyState.filter((country) => {
              const { Activities } = country;
              return Activities.some((activity) => activity.name === filter);
              // aca el some me devuelve true o false segun tenga actividad igual al filtro o no
              // y agrega el country a filteredCountries para devolverlo. 
            });
          }
        }
        if(orderBy === "Asc" || orderBy === "Desc"){
            
            let ordered = []
            let copyState2 = []
            if (filteredCountries.length) {
                copyState2 = filteredCountries;
            } else {
                copyState2 = [...state.allCountries];
            }
            // el metodo sort compara caso asc o desc, y el metodo localCompare compara dos strings alfabeticamente
            if (orderBy === "Alfabetico") {
                ordered = copyState2.sort((a, b) => {
                    if (order === "Asc") {
                        return a.name.localeCompare(b.name);
                    } else {
                        return b.name.localeCompare(a.name);
                    }
                });
            }

            if (orderBy === "Poblacion") {
                ordered = copyState2.sort((a, b) => {
                    if (order === "Asc") {
                        return a.population - b.population;
                    } else {
                        return b.population - a.population;
                    }
                });
            }
            return{...state, orderAndFilter: ordered}

        }else if (filteredCountries.length){
            return{...state, orderAndFilter:filteredCountries}// no hay orden, si filtros. 
        }
        return{...state, orderAndFilter: []} // si no hay filttro ni orden 

    default:
        return {...state}
 }


}


export default rootReducer;