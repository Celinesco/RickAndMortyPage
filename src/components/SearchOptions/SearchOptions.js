import './SearchOptions.scss'
import ButtonFetch from '../ButtonsFetch/ButtonFetch';
import Mms from '../../assets/Mms.png'

const SearchOptions = ({resetValues}) => {
    return (
        <div className="container__search-options">
          <div className='container__options'>
          <div className="option__container">
                Find your favorite Character
                <ButtonFetch 
                message="Go!" 
                route="/characters" 
                resetValues={resetValues}
                />
            </div>
            <div className="option__container">
                Looking for an episode?
                <ButtonFetch 
                message="Click here" 
                route="/episodes"
                resetValues={resetValues}
             />
            </div>
            <div className="option__container">
                Searching for your next vacation-destiny?
                <ButtonFetch 
                message="Get on board" 
                route="/locations"
                resetValues={resetValues}
                />
            </div>
          </div>
            <div className='container__img-mrmeeseeks'>
                <img src={Mms} alt="Mr. Meeseeks look at me"></img>
            </div>
            <p className='p__presentation'>I'm Mr Meeseeks</p>
        </div>
    )
}


export default SearchOptions;