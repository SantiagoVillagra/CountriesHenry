import { useSelector } from "react-redux";
import Card from "../Card/card";
import style from "../Search/search.module.css"


export default function Search(){
    const country = useSelector((state) => state.searchCountry)
    
 
    return(
        <div  className={style.card}>
            {
                country && country.map(({id,name,image,continent}) =>{
                    return(
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        continen={continent}
                        
                        />
                            
                       
                    )
                })
            }
        </div>
    )
}