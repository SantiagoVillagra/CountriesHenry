import {Link} from "react-router-dom"


export default function NavBar(){
    return(
        <div>
            <Link to ="/Home">
            <span>Home</span>
            </Link>
            <Link to ="/Create">
            <span>Creá tu actividad</span>
            </Link>
        </div>
    )
}