import Card from './Card'
import '../styles/CardContainer.scss';
import { useEffect, useState } from 'react';

const CardContainer = () => {
        const [personajes, setPersonajes] = useState([]);
        const [idEpisodio, setIdEpisodio] = useState([])

        useEffect(() => {
            fetch(`https://rickandmortyapi.com/api/character`)
            .then ((res) => res.json())
            .then ((data) => {
                console.log(data.results)
                setPersonajes(data.results)
                setIdEpisodio(data.results.episode[0])
            })

        }, []);

        // useEffect(()=> {
        //     fetch(`https://rickandmortyapi.com/api/episode/${idEpisodio}`)
        //     .then ((res) => res.json())
        //     .then ((data) => {
        //         setIdEpisodio(data.results.episode[0])
        //     })
        // }, [])

    return (
        <div className='container__cards'>
            {personajes.map((personaje)=> (
                <Card 
                title = {personaje.name}
                img = {personaje.image}
                status = {personaje.status}
                location = {personaje.location.name}
                firstEpisode = {}
                />
            ))}
        </div>
        
    )
}

export default CardContainer;