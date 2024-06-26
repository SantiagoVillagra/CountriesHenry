import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./detail.module.css"
import axios from "axios"

export default function Detail(){

//const [country, setCountry] = useState({})
const [country, setCountry] = useState({});

const { id } = useParams()

useEffect(() => {
        axios.get(`http://localhost:3001/countries/${id}`).then(({data})=> setCountry(data))
        
}, [id])

    return(
        <>
        <div className={styles.card}>
            <p>ID: {country.id}</p>
            <p>Name: {country.name}</p>
            <p>Continents: {country.continent}</p>
            <p>Capital: {country.capital}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Area: {country.area} m2</p>
            <p>Population: {country.population}</p>
            <img src={country.image} alt={country.name} className={styles.img}/>
        </div>
        </>
    )

}







/*
ID (Código de tres letras).
Nombre.
Imagen de la bandera.
Continente.
Capital.
Subregión (si tiene).
Área (si tiene).
Población.
 */ 