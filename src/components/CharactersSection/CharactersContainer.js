import { useState } from 'react';
import CharacterCard from './CharacterCard'





const CharactersContainer = ({searchedResults, handleCardClick}) => {
    const [episodes, setEpisodes] = useState([])

    const urlEpisodeArrays = searchedResults.map ((resultado)=> {
         return resultado?.episode?.at(0)
    })

    const numerosDeEpisodios = urlEpisodeArrays.map((url)=> {
        return (url.replace('https://rickandmortyapi.com/api/episode/', " "))
    })



    return (
        <div className='container__cards'>
            {searchedResults.map((result)=> (
                <CharacterCard
                key = {result.id}
                id = {result.id}
                title = {result.name}
                img = {result.image}
                status = {result.status}
                location = {result?.location?.name}
                firstEpisode = {result.episode?.at(0)}
                handleCardClick={handleCardClick}
                />
            ))}
        </div>
    )
}

export default CharactersContainer;