import './Form.scss'
import MrMeeseeksSearch from '../../assets/Mr_Meeseeks.png'

const Form = ({ setInputValue, handleClick }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleOnChange = e =>  setInputValue(e.target.value);
      


    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='container__labelinput'>
                <label htmlFor="character-search">Search</label>
                    <input id="character-search" type="text" onChange={handleOnChange}></input>
                
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