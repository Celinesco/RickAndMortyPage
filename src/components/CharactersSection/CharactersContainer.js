import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom'



const CharactersContainer = ({ searchedResults}) => {
    return (
        <div className='container__cards'>
            {searchedResults.map((result) => (
                <Link to={`/characters/${result.id}`} key={result.id}>
                    <CharacterCard
                        id={result.id}
                        title={result.name}
                        img={result.image}
                        status={result.status}
                        location={result?.location?.name}
                        firstEpisode={result.episode?.at(0)}
                    />
                </Link>
            ))}
        </div>
    )
}

export default CharactersContainer;