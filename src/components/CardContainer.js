import Card from './Card'
import '../styles/CardContainer.scss';



const CardContainer = ({searchedResults}) => {
    return (
        <div className='container__cards'>
            {searchedResults.map((result)=> (
                <Card 
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

export default CardContainer;