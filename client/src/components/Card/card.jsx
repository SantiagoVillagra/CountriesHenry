import { useNavigate } from "react-router-dom"

export default function Card({id,name,image,continent}){
    
    const navigate = useNavigate()
    const handleClick = () => navigate(`/detail/${id}`)
    
    return (
      <div>
        <img src={image} alt={name} onClick={handleClick} />
        <p onClick={handleClick}>{name.toUpperCase()}</p>
        <p>Continent: {continent}</p>
      </div>
    );
}

