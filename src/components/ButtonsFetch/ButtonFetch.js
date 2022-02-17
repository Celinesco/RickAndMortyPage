import './ButtonFetch.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const ButtonFetch = ({ message, route }) => {

    return (
        <div>
            <Link to={route} className='button__fetch'>
                {message}
            </Link>
            <Routes>
                <Route path={route}/>
            </Routes>


        </div>

    )
}

export default ButtonFetch;