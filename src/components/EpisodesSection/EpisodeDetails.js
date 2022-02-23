import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import '../../styles/detailsSection.scss';
import imgEpisodeCard from '../../assets/imgEpisodeCard.jpeg';




const EpisodeDetails = () => {

    const params = useParams();
    const [episodeDetails, setEpisodeDetails] = useState([]);
    const [charactersInEpisode, setCharactersInEpisode] = useState([]);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${params.idEpisode}`)
            .then((res) => res.json())
            .then((data) => {
                setEpisodeDetails(data);
                const charactersArray = data.characters.map((personaje) => {
                    return personaje.replace(
                        "https://rickandmortyapi.com/api/character/",
                        " "
                    );
                });
                const arrayToString = charactersArray.join();
                fetch(`https://rickandmortyapi.com/api/character/${arrayToString}`)
                    .then((res) => res.json())
                    .then((data) => Array.isArray(data) && setCharactersInEpisode(data));
            });
    }, []);



    return (
        <section className="section__details">
            <h2 className="h2__title-section color-font__detail-section">EPISODE DETAILS</h2>
            <div className='container__img-episode-detail'>
                <p className='p__episode-number'>{episodeDetails.id}</p>
                <img src={imgEpisodeCard} alt="Rick and Morty watching the episode you chose"></img>
            </div>
            <div className='container__info-section-details' >
                <div className="row">
                    <h3 className="color-font__detail-section">Name: </h3>
                    <p className="info-detail-section">{episodeDetails.name}</p>
                </div>
                <div className="row">
                    <h3 className="color-font__detail-section">Release date: </h3>
                    <p className="info-detail-section">{episodeDetails.air_date}</p>
                </div>
                <div className="row">
                    <h3 className="color-font__detail-section">Episode code: </h3>
                    <p className="info-detail-section">{episodeDetails.episode}</p>
                </div>
            </div>
                <h3 className="color-font__detail-section">Characters in this episode:</h3>
                <div className="container__cards-section-episode">
                    {charactersInEpisode.map((character) => (
                        <Link to={`/RickAndMortyPage/characters/${character.id}`} key={character.id} >
                            <article className='card__container-related-section' >
                                <div className='container__img-related-section'>
                                    <img src={character.image} alt={character.name}></img>
                                </div>
                                <div className='info__container'>
                                    <div className='section section-title'>
                                        <h2>{character.name}</h2>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
        </section>
    )
}

export default EpisodeDetails;