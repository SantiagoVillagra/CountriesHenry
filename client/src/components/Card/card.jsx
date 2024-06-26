import { useNavigate } from "react-router-dom"

export default function Card({id,name,flags,continents}){
    
    const navigate = useNavigate()
    const handleClick = () => navigate(`/detail/${id}`)
    
    return (
      <div>
        <img src={flags} alt={name} onClick={handleClick} />
        <p onClick={handleClick}>{name.toUpperCase()}</p>
        <p>Continent: {continents}</p>
      </div>
    );
}

