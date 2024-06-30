import { useState } from "react";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {searchCountries} from '../../redux/actions'
import style from "./searchBar.module.css"

export default function SearchBar(){
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [search, setSearch] = useState("")


    const handleChange = (event) =>{
        setSearch(event.target.value)
    }

    const handleSearch = (search) =>{
        navigate("/search")
        dispatch(searchCountries(search))
      
        console.log("atento aca",searchCountries(search))
    }


    return(
        <div className={style.containerSearch}>
            <input type="search" value={search} placeholder="Busca tu pais" onChange={handleChange} className={style.inputSearch} />
            <button onClick={handleSearch} className={style.botonSearch}>Busqueda</button>
        </div>
    )
}

