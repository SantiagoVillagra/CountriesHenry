import { useNavigate } from "react-router-dom"
import style from "../Card/card.module.css"
export default function Card({id,name,image,continent}){
    
    const navigate = useNavigate()
    const handleClick = () => navigate(`/detail/${id}`)
    
    return (
      <div className={style.cardInd}>
        <img src={image} alt={name} onClick={handleClick} />
        <p onClick={handleClick}>{name.toUpperCase()}</p>
        <p>Continent: {continent}</p>
      </div>
    );
}

