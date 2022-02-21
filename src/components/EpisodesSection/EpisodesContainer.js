import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";

const EpisodesContainer = ({ searchedResults }) => {
    return (
        <div className='container__cards'>
            {searchedResults.map((result) => (
               <Link to={`/episodes/${result.id}`}> <EpisodeCard
                    key={result.id}
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