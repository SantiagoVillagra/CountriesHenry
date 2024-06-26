import {Link} from "react-router-dom"
import style from '../NavBar/navBar.module.css'


export default function NavBar(){
    return(
        <div className={style.Navbar}>
            <Link to ="/Home">
            <span>Home</span>
            </Link>
            <Link to ="/Create">
            <span>Creá tu actividad</span>
            </Link>
            <Link to ="/About">
            <span>About</span>
            </Link>
        </div>
    )
}