import fotocv from "../../assets/fotocv.jpg"
import style from "./about.module.css"

export default function About(){
    return(
        <div className={style.cardAbout} >
          <img  className={style.img} src={fotocv} alt="Villagra Santiago" />
        {/* <div>
          <h1>Mi nombre es Santiago Villagra</h1>

        </div> */}
          <p>
            Esta pagina fue creada con la intencion de mejorar y practicar mis habilidades como futuro desarrollador web fullstack, cursando el bootcamp de Henry.
          </p>



        </div>
    )
}