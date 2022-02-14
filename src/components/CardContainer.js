import Card from './Card'
import '../styles/CardContainer.scss';



const CardContainer = ({personajes}) => {
    return (
        <div className='container__cards'>
            {personajes.map((personaje)=> (
                <Card 
                key = {personaje.id}
                title = {personaje.name}
                img = {personaje.image}
                status = {personaje.status}
                location = {personaje.location.name}
                firstEpisode = {personaje.episode[0]}
                />
            ))}
        </div>
        
    )
}

export default CardContainer;