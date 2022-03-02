import './Form.scss'
import { useRef } from 'react';
import MrMeeseeksSearch from '../../assets/Mr_Meeseeks.png'

const Form = ({ setSearch, setPage }) => {

    const inputSearch = useRef();
   
    const handleClick = (e) => {
        e.preventDefault();
        setSearch(inputSearch.current.value);
        setPage(1)
    };

    return (
        <form  className="form">
            <div className='container__labelinput'>
                <label htmlFor="character-search">Search</label>
                    <input ref={inputSearch} id="character-search" type="text" ></input>
            </div>
            <button onClick={handleClick}>
                <div className='container__iconsearch'>
                    <img src={MrMeeseeksSearch} alt="Mr. Meeseeks ready to help"></img>
                </div>
            </button>
        </form>
    )
}

export default Form;