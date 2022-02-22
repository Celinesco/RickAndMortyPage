import './ButtonFetch.scss';
import { Routes, Route, Link } from "react-router-dom";


const ButtonFetch = ({ message, route, resetValues }) => {

    return (
        <div className='container__buttonsfetch'>
            <Link to={`/RickAndMortyPage${route}`} onClick={resetValues} className='button__fetch'>
                {message}
            </Link>
            <Routes>
                <Route path={route}/>
            </Routes>


        </div>

    )
}

export default ButtonFetch;