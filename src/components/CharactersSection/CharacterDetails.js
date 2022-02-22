import '../../styles/detailsSection.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imgEpisodeCard from '../../assets/imgEpisodeCard.jpeg';



const CharacterDetails = () => {
    const params = useParams();
    const [characterDetails, setCharacterDetails] = useState([])
    const [appearsInEpisode, setAppearsInEpisode] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.idCharacter}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacterDetails(data);
                const episodesArray = data.episode.map((episode) => {
                    return episode.replace(
                        "https://rickandmortyapi.com/api/episode/",
                        " "
                    );
                });
                const arrayToString = episodesArray.join();
                fetch(`https://rickandmortyapi.com/api/episode/${arrayToString}`)
                    .then((res) => res.json())
                    .then((data) => setAppearsInEpisode(data));
            });
    }, []);



    return (
        <article className='section__details'>
            <h2 className="h2__title-section color-font__detail-section">CHARACTERS DETAILS</h2>
            <div className='container__img-details-section'>
                <img src={characterDetails.image}></img>
            </div>
            <div className="row">
                <h3 className="color-font__detail-section">Name: </h3>
                <p className="info-detail-section">{characterDetails.name}</p>
            </div>
            <div className="row">
                <h3 className="color-font__detail-section">Status: </h3>
                <p className="info-detail-section">{characterDetails.status}</p>
            </div>
            <div className="row">
                <h3 className="color-font__detail-section">Last Location: </h3>
                <p className="info-detail-section">{characterDetails?.location?.name}</p>
            </div>

            <h3 className="color-font__detail-section">You can find {characterDetails.name} in:</h3>
            <div className="container__cards-section-details container__cards-section-details-episodes ">
            { Array.isArray(appearsInEpisode) 
                ? (appearsInEpisode.length == 51
                    ? <div className='info-detail-section'> in every episode!! </div>
                    : appearsInEpisode.map((episode) => (
                        <article className='card__container-related-section card__container-related-section-character' key={episode.id}>
                            <div className='episode-related'>
                                <p className='p__episode-number'>{episode.id}</p>
                                <img src={imgEpisodeCard}></img>
                            </div>
                            <div className='info__container'>
                                <div className='section section-title'>
                                    <h2>{episode.name}</h2>
                                </div>
                            </div>
                        </article>
                    )))
                :    <article className='card__container-related-section' key={appearsInEpisode.id}>
                <div className='container__img-related-section'>
                    <img src={imgEpisodeCard}></img>
                </div>
                <div className='info__container'>
                    <div className='section section-title'>
                        <h2>{appearsInEpisode.name}</h2>
                    </div>
                </div>
            </article>
            }
             

            </div>
        </article>
    )
}


export default CharacterDetails;

