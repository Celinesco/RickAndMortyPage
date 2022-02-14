import MrMeeseeBox from '../MrMeeseeBox.png';
import '../styles/Presentation.scss'

const Presentation = ({handleBoxClick}) => {
    return (
        <div className='container__presentation'>
            <p className='p__presentation'>
                ...Click on the box...
            </p>
            <button onClick={handleBoxClick}>
                <img src={MrMeeseeBox}></img>
            </button>
        </div>

    )
}

export default Presentation