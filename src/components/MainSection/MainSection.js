import './MainSection.scss'
import SearchOptions from '../SearchOptions/SearchOptions';
import { useState } from 'react';
import Presentation from '../Presentation/Presentation';

const MainSection = () => {
    const [visibleOption, setVisibleOption] = useState(false)
    const [visibleBox, setVisibleBox] = useState(true)

    const handleBoxClick = () => {
        setVisibleBox(false)
        setVisibleOption(true)
    }

    return (
        <section className='section__main'>
            {visibleBox && <Presentation handleBoxClick={handleBoxClick} />}
            {visibleOption && <div className='container__img-main'></div>}
            {visibleOption && <SearchOptions />}

        </section>
    )
}
export default MainSection;

