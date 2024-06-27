import Card from "../Card/card"
import SearchBar from "../SearchBar/SearchBar"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { orderAndFilter, getCountries } from "../../redux/actions"
import style from "../Home/home.module.css"


export default function Home(){
const dispatch = useDispatch()

    const filterDefault = {
        filterBy: "",
        filtro:""
    }

    const orderDefault = {
        orderBy:"",
        order:""
    }

    const {filterApply, setFilter} = useState(filterDefault)
    const {order, setOrder} = useState(orderDefault)

    const allCountries = useSelector((state)=> state.allCountries)
    const countriesAct = useSelector((state) => state.countriesAct)
    const orderAndFilter = useSelector((state) => state.orderAndFilter)


    const selectFilter = (event) =>{
        setFilter({...filterApply, filterBy: event.target.value})
    }
    const handleFilter = (event) => {
        setFilter({...filterApply, filtro: event.target.value})
    }
    const selectOrderr = (event) =>{
        setOrder({...order, orderBy: event.target.value})
    }
    const handleOrder = (event) => {
        setOrder({...order, order: event.target.value})
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])



    const countriesXPage = 10
    const [cardPage, setCardPage] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {  
      
    setCardPage([...allCountries].splice(0, countriesXPage))
    
    }, [allCountries])

    const prevHandler = () => {
        const prevPage = currentPage - 1
        if (prevPage < 0) return
        const firstIndex = prevPage * countriesXPage
        if (orderAndFilter.length > 0) {
            setCardPage([...orderAndFilter].splice(firstIndex, countriesXPage))
        } else {
            setCardPage([...allCountries].splice(firstIndex, countriesXPage))
        }
        setCurrentPage(prevPage)
    }

    const nextHandler = () => {
        let totalCountries 
        if (orderAndFilter.length > 0){
            totalCountries = orderAndFilter.length
        } else {
            totalCountries = allCountries.length
        }
        
        const nextPage = currentPage + 1
        const firstIndex = nextPage * countriesXPage
        if (firstIndex >= totalCountries) return
        if (orderAndFilter.length > 0) {
            setCardPage([...orderAndFilter].splice(firstIndex, countriesXPage))
        } else {
            setCardPage([...allCountries].splice(firstIndex, countriesXPage))
        }
        setCurrentPage(nextPage)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(orderAndFilter(filterApply.filterBy, filterApply.filtro, order.orderBy, order.order))
        setFilter(filterDefault)
        setOrder(orderDefault)
    }


return(
    <>
    <div>
        <SearchBar></SearchBar>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <select name="filter">
                    <option >Filtrar por</option>
                    <option >Continente</option>
                    <option >Tipo </option>
                   
                </select>
                {filterApply.filterBy === "Tipo" &&
                            <select onChange={handleFilter}>
                                <option value="">Filtro</option>
                                {countriesAct.map(tipo => (
                                    <option key={tipo.name} value={tipo.name}>{tipo.name}</option>
                                ))}
                            </select>
                        }
            </div>
            <div>
                <select name="order">
                    <option >Ordenar por</option>
                    <option >Alfabetico</option>
                    <option >Poblacion </option>
                    <option ></option>
                </select>
            </div>
            <button type="submit">Aplicar filtros</button>
        </form>
    </div>
    <div className={style.Cards} >
                {cardPage?.map(({ id, name, image, continent }) => (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        continent={continent}
                    />
                ))}
            </div>



            <div >
                <div >
                    <button onClick={prevHandler}>{"<<"}</button>
                    <p>{currentPage + 1}</p>
                    <button onClick={nextHandler}>{">>"}</button>
                </div>
            </div>
    </>
)
}

