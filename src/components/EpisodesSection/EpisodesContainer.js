import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";

const EpisodesContainer = ({ searchedResults, totalResults, searchNotFound }) => {
    return (
        <div className='container__cards'>
            {!searchNotFound &&
                <div className='row'>
                    <h3 className='total-results'>Results:</h3>
                    <div className="cantidad-resultados">{totalResults} Episodes</div>
                </div>
            }
            {searchedResults.map((result) => (
                <Link to={`/RickAndMortyPage/episodes/${result.id}`} key={result.id}>
                    <EpisodeCard
                        number={result.id}
                        title={result.name}
                        date={result.air_date}
                        episodeCode={result.episode}
                    />
                </Link>
            ))}
        </div>
    )

}

export default EpisodesContainer;