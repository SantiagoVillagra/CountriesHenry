import { GET_COUNTRIES, SEARCH_COUNTRIES, COUNTRIES_ACTIVITY, ORDER_AND_FILTER } from '../redux/actionTypes'



//state = initialState, { type, payload }

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
        return{...state, searchCountry: payload}

    case COUNTRIES_ACTIVITY:
        return{...state, countriesAct: payload}

    

    default:
        return {...state}
 }


}


export default rootReducer;