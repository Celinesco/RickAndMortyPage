import '../../../styles/detailsSection.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imgEpisodeCard from '../../../assets/imgEpisodeCard.jpeg'


const CharacterDetails = ({ handleCloseDetails }) => {
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
                    .then((data) => Array.isArray(data) && setAppearsInEpisode(data));
            });
    }, []);


    console.log(appearsInEpisode)

    return (
        <article className='section__details'>
            <h2 className="h2__title-section color-font__detail-section">CHARACTERS DETAILS</h2>
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
                <div className='container__img-details-section'>
                    <img src={characterDetails.image}></img>
                </div>

                <h3 className="color-font__detail-section">You can find this character in:</h3>
                <div className="container__cards-section-episode">
                    {appearsInEpisode.map((episode) => (
                        <article className='card__container-related-section' key={episode.id}>
                            <div className='container__img-character-related-section '>
                                <img src={imgEpisodeCard}></img>
                            </div>
                            <div className='info__container'>
                                <div className='section section-title'>
                                    <h2>{episode.name}</h2>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
        </article>
    )
}


export default CharacterDetails;

