import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './EpisodeDetails.scss';
import '../../styles/Card.scss';



const EpisodeDetails = () => {

    const params = useParams();
    const [detallesEpisodio, setDetallesEpisodio] = useState([]);
    const [obtenerPersonajes, setObtenerPersonajes] = useState([]);
    const [charactersInEpisode, setCharactersInEpisode] = useState([]);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${params.idEpisode}`)
            .then(res => res.json())
            .then((data) => {
                setDetallesEpisodio(data)
                setObtenerPersonajes(data.characters)
            })

    }, [])


    const charactersArray = obtenerPersonajes.map((personaje) => {
        return personaje.replace('https://rickandmortyapi.com/api/character/', " ")
    })

    const stringCharacters = charactersArray.join()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${stringCharacters}`)
            .then(res => res.json())
            .then(data => Array.isArray(data) && setCharactersInEpisode(data))
    }, [obtenerPersonajes])



    return (
        <section className="section__episode-details">
            <h2 className="h2__title-section color-font__detail-section">Episode Details</h2>
            <article>
                <h3 className="color-font__detail-section">Name: {detallesEpisodio.name}</h3>
                <h3 className="color-font__detail-section">Release date: {detallesEpisodio.air_date}</h3>
                <h3 className="color-font__detail-section">Characters in this episode:</h3>


                <div>
                    {charactersInEpisode.map((character) => {
                        <article className='card__container' key={character.id}>
                            <div className='img__container container__img-character'>
                                <img src={character.image}></img>
                            </div>
                            <div className='info__container'>
                                <div className='section section-title'>
                                    <h2>{character.name}</h2>
                                </div>
                            </div>
                        </article>
                    })}
                </div>





            </article>
        </section>
    )
}

export default EpisodeDetails;