import { GET_COUNTRIES, SEARCH_COUNTRIES, COUNTRIES_ACTIVITY, ORDER_AND_FILTER } from '../redux/actionTypes'

import axios from "axios"


export const getCountries = () => {
    return function(dispatch) {
        axios.get("http://localhost:3001/countries")
        .then(({data}) => dispatch({type: GET_COUNTRIES, payload: data}))
    }
}


export const searchCountries = (name) =>{
    return function(dispatch){
        axios.get(`http://localhost:3001/countries?name=${name}`)
        .then(({data}) => dispatch({type:SEARCH_COUNTRIES, payload: data}))
        console.log("esto recibe el:",name)
    }
}


export const countriesActivity = () =>{
    return function (dispatch){
        axios.get("http://localhost:3001/activities")
        .then(({data}) => dispatch({type: COUNTRIES_ACTIVITY, payload: data}))
    }
}

export const orderAndFilter = (filterBy, filter, orderBy, order) =>{
    return {
        type: ORDER_AND_FILTER,
        payload: {filterBy, filter, orderBy, order}
    }
}









/*
 export const removeFav = (id) => {
//    return (dispatch) => {
//    axios.delete(`${URL}/${id}`).then(({ data }) => {
//       return dispatch({
//          type: REMOVE_FAV,
//          payload: data,
//    });
//    });
// };
// };
 */ 