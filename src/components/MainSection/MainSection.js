import './MainSection.scss'
import SearchOptions from '../SearchOptions/SearchOptions';
import { useState } from 'react';
import Presentation from '../Presentation/Presentation';

const MainSection = ({loadCharacters,loadEpisodes,loadLocations}) => {
    const [visibleOption, setVisibleOption] = useState(false)
    const [visibleBox, setVisibleBox] = useState(true)

    const handleBoxClick = () => {
        setVisibleBox(false)
        setVisibleOption(true)  
    }

    return (
        <section className='section__main'>
            {visibleBox && <Presentation handleBoxClick={handleBoxClick}/>}
            {visibleOption && <SearchOptions 
             loadCharacters = {loadCharacters}
             loadEpisodes = {loadEpisodes}
             loadLocations = {loadLocations}
            />}
        </section>
    )
}
export default MainSection;

