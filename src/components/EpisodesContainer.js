import EpisodeCard from "./EpisodeCard";

const EpisodesContainer = ({searchedResults}) => {
    return (
        <div className='container__cards'>
            {searchedResults.map((result)=> (
            <EpisodeCard
            key={result.id}
            number={result.id}
            title = {result.name}
            date={result.air_date}
            episodeCode = {result.episode}
            />
       ))}
       </div>
    )
    
}

export default EpisodesContainer;