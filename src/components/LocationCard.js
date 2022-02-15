import '../styles/Card.scss'
import typePlanet from '../typePlanet.jpg';
import dimensionPortal from '../dimensionPortal.png'

const LocationCard = ({ title, type, dimension }) => {
    return (
        <article className='card__container'>
            <div className='img__container'>
                <img src={type === "Planet" ? typePlanet : dimensionPortal }/>
            </div>
            <div className='info__container'>
                <div className='section'>
                    <h2>{title}</h2>
                </div>
                <div className='section'>
                    <p className='subtitle'>Type</p>
                    <p>{type}</p>
                </div>
                <div className='section'>
                    <p className='subtitle'>Dimension</p>
                    <p>{dimension}</p>
                </div>
            </div>
        </article>
    )
}

export default LocationCard;