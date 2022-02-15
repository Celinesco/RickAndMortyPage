import '../styles/DetailsSection.scss';
import { BsXLg } from 'react-icons/bs';


const CharacterDetails = ({title, img, handleCloseDetails}) => {
    return (
        <article className='container__details-section'>
            
            <div className='container__modal-info'>
            <button onClick={handleCloseDetails} className='button__close'><BsXLg/></button>
            <p>{title}</p>
            <div className='container__img'>
                <img src={img}></img>
            </div>
               
            </div>
            

        </article>
    )
}


export default CharacterDetails;

