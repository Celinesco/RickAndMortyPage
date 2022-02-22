import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import '../../styles/detailsSection.scss';




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
            <div>
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
             
                <h3 className="color-font__detail-section">Characters in this episode:</h3>
                <div className="container__cards-section-episode">
                    {charactersInEpisode.map((character) => (
                        <article className='card__container-related-section' key={character.id}>
                            <div className='container__img-character-related-section '>
                                <img src={character.image}></img>
                            </div>
                            <div className='info__container'>
                                <div className='section section-title'>
                                    <h2>{character.name}</h2>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>






            </div>
        </section>
    )
}

export default EpisodeDetails;