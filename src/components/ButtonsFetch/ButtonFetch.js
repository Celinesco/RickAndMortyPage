import './ButtonFetch.scss';
import { Link } from "react-router-dom";


const ButtonFetch = ({ message, route, resetValues }) => {

    return (
        <div className='container__buttonsfetch'>
            <Link to={`${route}`} onClick={resetValues} className='button__fetch'>
                {message}
            </Link>
    
        </div>

    )
}

export default ButtonFetch;