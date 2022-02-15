import '../styles/Card.scss'

const Card = ({ title, img, status, location, firstEpisode }) => {

    // if (status === "unknown") {
    //     status = "Unknown"
    // }

    return (
        <article className='card__container'>
            <div className='img__container'>
                {/* <img src={img}></img> */}
            </div>
            <div className='info__container'>
                <div className='section'>
                <h2>{title}</h2>
                <div className='container__status'>
                    <div className={status}></div>
                    <p>{status}</p>
                </div>
                </div>
                <div className='section'>
                    <p className='subtitle'>Last known location:</p>
                    <p>{location}</p>
                </div>
                <div className='section'>
                    <p className='subtitle'>First seen in:</p>
                    <p>{firstEpisode}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;