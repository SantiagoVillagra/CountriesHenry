import style from '../Landing/landing.module.css'
import { useNavigate } from 'react-router-dom';
import imageButton from '../../assets/buton_landing.png'

export default function LandingPage(){

const navigate = useNavigate()
const handleClick = () =>{
    navigate('/home')
}
    return(
        <div className={style.fondo}>
            <button className={style.imageButton} onClick={handleClick}>
                <img src={imageButton} alt="mundo" />
            </button>
        </div>
    )
}


