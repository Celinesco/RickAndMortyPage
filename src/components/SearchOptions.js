import '../styles/SearchOptions.scss'
import ButtonFetch from './ButtonFetch';
import Mms from '../Mms.png'
import { useState } from 'react';

const SearchOptions = ({loadCharacters, loadEpisodes, loadLocations}) => {
 
    



    return (
        <div className="container__search-options">
          <div className='container__buttons'>
          <div className="option__container">
                Find your favorite Character
                <ButtonFetch 
                message="Go!" 
                openSection={loadCharacters} 
                />
            </div>
            <div className="option__container">
                Looking for an episode?
                <ButtonFetch 
                message="Click here" 
                openSection={loadEpisodes}
             />
            </div>
            <div className="option__container">
                Searching for your next vacation-destiny?
                <ButtonFetch 
                message="Get on board" 
                openSection={loadLocations}
                />
            </div>
          </div>
            <div className='container__img-mrmeeseeks'>
                <img src={Mms}></img>
            </div>
            <p className='p__presentation'>I'm Mr Meeseeks</p>
        </div>
    )
}


export default SearchOptions;