import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';




const CharactersContainer = ({ searchedResults, totalResults, searchNotFound }) => {
    return (
        <div className='container__cards'>
            {!searchNotFound &&  
            <div className='row'>
                <h3 className='total-results'>Results:</h3>
                <div className="cantidad-resultados">{totalResults} Characters</div>
            </div>
            }
            {searchedResults.map((result) => (
                <Link to={`/RickAndMortyPage/characters/${result.id}`} key={result.id}>
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