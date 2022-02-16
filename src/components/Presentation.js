import MrMeeseeksBox from '../assets/MrMeeseeksBox.png';
import '../styles/Presentation.scss'

const Presentation = ({handleBoxClick}) => {
    return (
        <div className='container__presentation'>
            <p className='p__presentation'>
                ...Click on the box...
            </p>
            <button onClick={handleBoxClick}>
                <img src={MrMeeseeksBox}></img>
            </button>
        </div>

    )
}

export default Presentation