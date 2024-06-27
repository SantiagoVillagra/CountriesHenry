import { useState } from "react";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {searchCountries} from '../../redux/actions'

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
        <div>
            <input type="search" value={search} placeholder="Busca tu pais" onChange={handleChange} />
            <button onClick={handleSearch}>Busqueda</button>
        </div>
    )
}

