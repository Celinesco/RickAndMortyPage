import '../../styles/Card.scss';
import imgEpisodeCard from '../../assets/imgEpisodeCard.jpeg';

const EpisodeCard = ({ number, title, date, episodeCode }) => {
    return (
        <article className='card__container container__episode-card'>
            <div className='img__container container__img-episode '>
                <p className='p__episode-number'>{number}</p>
                <img src={imgEpisodeCard}></img>
            </div>
            <div className='info__container'>
                <div className='section section-title'>
                    <h2>{title}</h2>
                </div>
                <div className='section hide-mobile'>
                    <p className='subtitle'>Released date</p>
                    <p>{date}</p>

                </div>
                <div className='section container__location'>
                    <p className='subtitle'>Episode code</p>
                    <p>{episodeCode}</p>
                </div>
            </div>
        </article>
    )
}


export default EpisodeCard;