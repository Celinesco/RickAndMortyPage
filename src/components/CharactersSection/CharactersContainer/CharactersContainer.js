import CharacterCard from '../CharacterCard/CharacterCard'
import './/CharactersContainer.scss';




const CharactersContainer = ({searchedResults, handleCardClick}) => {
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