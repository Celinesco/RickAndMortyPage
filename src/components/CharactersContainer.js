import CharacterCard from './CharacterCard'
import '../styles/CardContainer.scss';




const CharactersContainer = ({searchedResults}) => {
    return (
        <div className='container__cards'>
            {searchedResults.map((result)=> (
                <CharacterCard
                key = {result.id}
                title = {result.name}
                img = {result.image}
                status = {result.status}
                location = {result.location.name}
                firstEpisode = {result.episode[0]}
                />
            ))}
        </div>
    )
}

export default CharactersContainer;