import '../styles/SearchOptions.scss'
import ButtonFetch from './ButtonFetch';
import Mms from '../Mms.png'
import { useState } from 'react';

const SearchOptions = ({loadCharacters, loadEpisodes, loadLocations}) => {
    //cuando apreto el boton seccion personajes quiero que:
    //1- se oculte la main-seccion
    //2-aparezca la seccion personajes
    //PREGUNTA PARA MALE: pueden dos estados != afectar al mismo componente?



    return (
        <div className="container__search-options">
          <div className='container__buttons'>
          <div className="option__container">
                Find your favorite Character
                <ButtonFetch 
                message="Go!" 
                section={loadCharacters} 
                />
            </div>
            <div className="option__container">
                Looking for an episode?
                <ButtonFetch 
                message="Click here" 
                section={loadEpisodes}
             />
            </div>
            <div className="option__container">
                Searching for your next vacation-destiny?
                <ButtonFetch 
                message="Get on board" 
                section={loadLocations}
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