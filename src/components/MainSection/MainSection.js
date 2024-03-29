import './MainSection.scss'
import SearchOptions from '../SearchOptions/SearchOptions';
import Presentation from '../Presentation/Presentation';

const MainSection = ({visibleBox, visibleOption, handleBoxClick, resetValues}) => {
  
    return (
        <section className='section__main'>
            {visibleBox && <Presentation handleBoxClick={handleBoxClick} />}
            {visibleOption && <div className='container__img-main'></div>}
            {visibleOption && <SearchOptions resetValues={resetValues}/>}

        </section>
    )
}
export default MainSection;

