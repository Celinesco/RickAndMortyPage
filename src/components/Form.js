import '../styles/Form.scss'
import MrMeeseeksSearch from '../Mr_Meeseeks.png'

const Form = ({ handleChange, handleClick }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='container__labelinput'>
                <label htmlFor="character-search">Find character</label>
                    <input id="character-search" type="text" onChange={handleChange}></input>
                
            </div>
            <button onClick={handleClick}>
                <div className='container__iconsearch'>
                    <img src={MrMeeseeksSearch}></img>
                </div>

            </button>
        </form>

    )
}

export default Form;