import '../../styles/Card.scss'
import typePlanet from '../../assets/typePlanet.jpg';
import dimensionPortal from '../../assets/dimensionPortal.png'

const LocationCard = ({ title, type, dimension }) => {

    let srcImage = dimensionPortal;
   
    if (type === "Planet") {
        srcImage = typePlanet
    }
    if (type === "Space station" ) {
        srcImage = "https://i.imgur.com/Y4STROih.jpg"
    }
    if (type === "Microverse") {
        srcImage = "https://i1.sndcdn.com/artworks-000497904960-qwenkp-t500x500.jpg"
    }

    return (
        <article className='card__container container__location-card'>
            <div className='img__container container__img-location'>
                <img src={srcImage}/>
            </div>
            <div className='info__container'>
                <div className='section section-title'>
                    <h2>{title}</h2>
                </div>
                <div className='section hide-mobile'>
                    <p className='subtitle'>Type</p>
                    <p>{type}</p>
                </div>
                <div className='section container__location'>
                    <p className='subtitle'>Dimension</p>
                    <p>{dimension}</p>
                </div>
            </div>
        </article>
    )
}

export default LocationCard;