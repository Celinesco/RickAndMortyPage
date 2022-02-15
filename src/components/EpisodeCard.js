import '../styles/Card.scss';
import imgEpisodeCard from '../imgEpisodeCard.jpeg';

const EpisodeCard = ({ number, title, date, episodeCode }) => {
    return (
        <article className='card__container'>
            <div className='img__container img__container--episode'>
                <p className='p__episode-number'>{number}</p>
                <img src={imgEpisodeCard}></img>
            </div>
            <div className='info__container'>
                <div className='section'>
                    <h2>{title}</h2>
                </div>
                <div className='section'>
                    <p className='subtitle'>Released date</p>
                    <p>{date}</p>

                </div>
                <div className='section'>
                    <p className='subtitle'>Episode code</p>
                    <p>{episodeCode}</p>
                </div>
            </div>
        </article>
    )
}


export default EpisodeCard;