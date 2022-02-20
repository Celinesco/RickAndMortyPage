import '../../../styles/Card.scss';


const CharacterCard = ({ title, img, status, location, firstEpisode, handleCardClick, id }) => {

    if (status === "unknown") {
        status = "Unknown"
    }



    return (
        <article onClick={handleCardClick} className='card__container' id={id}>
            <div className='img__container container__img-character'>
                <img src={img}></img>
            </div>
            <div className='info__container'>
                <div className='section section-title'>
                    <h2>{title}</h2>
                    <div className='section'>
                        <div className='container__status'>
                            <div className={status}></div>
                            <p>{status}</p>
                        </div>

                    </div>
                </div>
                <div className='section container__location'>
                    <p className='subtitle'>Last known location:</p>
                    <p>{location}</p>
                </div>
                {/* <div className='section'>
                    <p className='subtitle'>First seen in:</p>
                    <p>{firstEpisode}</p>
                </div> */}
            </div>
        </article>
    )
}

export default CharacterCard;