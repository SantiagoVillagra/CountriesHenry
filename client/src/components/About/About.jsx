import fotocv from "../../assets/fotocv.jpg"
import style from "./about.module.css"

export default function About(){
    return(
        <div className={style.cardAbout} >
        
          <img  className={style.img} src={fotocv} alt="Villagra Santiago" />
          <p>
            Esta pagina fue creada con la intencion de mejorar mis cualidades como desarrollador web fullstack, cursando el bootcamp de Henry.
          </p>

        </div>
    )
}