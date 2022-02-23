import MrMeeseeksBox from '../../assets/MrMeeseeksBox.png';
import './Presentation.scss'

const Presentation = ({handleBoxClick}) => {
    return (
        <div className='container__presentation'>
            <p className='p__presentation'>
                ...Click on the box...
            </p>
            <button className='container__img-presentation' onClick={handleBoxClick}>
                <img src={MrMeeseeksBox} alt="Meeseeks-box"></img>
            </button>
        </div>

    )
}

export default Presentation;