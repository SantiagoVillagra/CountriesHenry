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
        dispatch(searchCountries(search))
        setSearch("")
        navigate("/search")
    }


    return(
        <div className={style.containerSearch}>
            <input type="search" value={search} placeholder="Busca tu pais" onChange={handleChange} className={style.inputSearch} />
            <button onClick={handleSearch} className={style.botonSeach}>Busqueda</button>
        </div>
    )
}

