import Card from "../Card/card"
import SearchBar from "../SearchBar/SearchBar"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { orderAndFilter, getCountries, getActivity,  } from "../../redux/actions"
import style from "../Home/home.module.css"
import { useFetcher } from "react-router-dom"


export default function Home(){
  const dispatch = useDispatch();

  const filterDefault = {
    filterBy: "",
    filtro: "",
  };

  const orderDefault = {
    orderBy: "",
    order: "",
  };

  const [filterApply, setFilter] = useState(filterDefault);
  const [order, setOrder] = useState(orderDefault);

  const allCountries = useSelector((state) => state.allCountries);
  const countriesAct = useSelector((state) => state.countriesAct);
  const orderedAndFiltered  = useSelector((state) => state.orderAndFilter);




  const selectFilter = (event) => {
    setFilter({ ...filterApply, filterBy: event.target.value });
  };
  const handleFilter = (event) => {
    setFilter({ ...filterApply, filtro: event.target.value });
  };
  const selectOrder = (event) => {
    setOrder({ ...order, orderBy: event.target.value });
  };
  const handleOrder = (event) => {
    setOrder({ ...order, order: event.target.value });
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity())
  }, [dispatch]);

  const countriesXPage = 10;
  const [cardPage, setCardPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if(orderedAndFiltered.length>0){
      setCardPage([...orderedAndFiltered].splice(0, countriesXPage))
    }
    else{setCardPage([...allCountries].splice(0, countriesXPage));
    }
  }, [orderedAndFiltered,allCountries]);

 

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * countriesXPage;
    if (orderedAndFiltered .length > 0) {
      setCardPage([...orderedAndFiltered ].splice(firstIndex, countriesXPage));
    } else {
      setCardPage([...allCountries].splice(firstIndex, countriesXPage));
    }
    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    let totalCountries;
    if (orderedAndFiltered .length > 0) {
      totalCountries = orderedAndFiltered .length;
    } else {
      totalCountries = allCountries.length;
    }

    const nextPage = currentPage + 1;
    const firstIndex = nextPage * countriesXPage;
    if (firstIndex >= totalCountries) return;
    if (orderedAndFiltered .length > 0) {
      setCardPage([...orderedAndFiltered ].splice(firstIndex, countriesXPage));
    } else {
      setCardPage([...allCountries].splice(firstIndex, countriesXPage));
    }
    setCurrentPage(nextPage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
        orderAndFilter(
        filterApply.filterBy,
        filterApply.filtro,
        order.orderBy,
        order.order
      )
    );
    setFilter(filterDefault);
    setOrder(orderDefault);
   
  };

  return (
    <>
    <div className={style.homeBackground}>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <select name="filter" onChange={selectFilter}>
              <option value="">Filtrar por</option>
              <option value="Continente">Continente</option>
              <option value="Tipo">Tipo </option>
            </select>
            {filterApply.filterBy === "Tipo" && (
              <select onChange={handleFilter}>
                <option value="">Filtro</option>
                {countriesAct.map((tipo) => (
                  <option key={tipo.name} value={tipo.name}>
                    {tipo.name}
                  </option>
                ))}
              </select>
            )}
            {filterApply.filterBy === "Continente" && (
              <select onChange={handleFilter}>
                <option value="">Filtro</option>
                <option value="Africa">Africa</option>
                <option value="Antartica">Antartica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
              </select>
            )}
          </div>
          <div>
            <select name="order" onChange={selectOrder}>
              <option value="">Ordenar por</option>
              <option value="Alfabetico">Alfabetico</option>
              <option value="Poblacion">Poblacion </option>
            </select>
            {order.orderBy !== "" &&
                            <select onChange={handleOrder}>
                                <option value="">Orden</option>
                                <option value="Asc">Ascendente</option>
                                <option value="Desc">Descendente</option>
                            </select>
                        }
          </div>
          <button type="submit">Aplicar filtros</button>
        </form>
      </div>
      <div className={style.Cards}>
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

      <div>
        <div className={style.pagButton}>
          <button onClick={prevHandler}>{"<<"}</button>
          <p>{currentPage + 1}</p>
          <button onClick={nextHandler}>{">>"}</button>
        </div>
      </div>
      </div>
    </>
  );
}

