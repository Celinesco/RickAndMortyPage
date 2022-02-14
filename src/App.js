import { useState } from 'react';
import './App.scss';
import CharacterSection from './components/CharacterSection';
import NavBar from './components/NavBar';
import MrMeeseeBox from './MrMeeseeBox.png';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import EpisodeSection from './components/EpisodeSection';
import LocationSection from './components/LocationSection';



const App = () => {
  const [characterSection, setCharacterSection] = useState(false);
  const [mainSection, setMainSection] = useState(true);
  const [episodeSection, setEpisodeSection] = useState(false);
  const [locationSection, setLocationSection] = useState(false);

  const loadEpisodes = () => {
    setMainSection(false)
    setEpisodeSection(true)
  }

  const loadCharacters = () => {
    setMainSection(false)
    setCharacterSection(true)
  }

  const loadLocations = () => {
    setMainSection(false)
    setLocationSection(true)
  }



  return (
    <div className='App'>
      <NavBar imgBox={MrMeeseeBox} />
      <div className='container__img-main'>
      </div>
      {mainSection && <MainSection 
      loadCharacters = {loadCharacters}
      loadEpisodes = {loadEpisodes}
      loadLocations = {loadLocations}
      />}


      {characterSection && <CharacterSection />}
      {episodeSection && <EpisodeSection />}
      {locationSection && < LocationSection />}
      <Footer />

    </div>
  );
}

export default App;

// preguntas Male
// Animaciones. 
// Me cuesta organizarme donde colocar los estados, y tener criterio para cuando hacer componentes. 
// Ejemplo el componente form o el componente de los botones para hacer fetch
// Al oncklick, se le puede asignar mas de una funcion? Y como se le pasan parametros a las funciones. 
// sobre los fetchs, me convendria hacer en este caso un fecth asi:
// fetch(`https://rickandmortyapi.com/api/${seccion}/?name=${busqueda}`) 
// en este caso. el fecth deberia estar en app? para evitar escribir uno por cada seccion?
// preguntar si en CharacterSection se esta haciendo dos veces el Fetch
// para la cantidad de paginas totales, por que tengo que hacer una variable de estado??
// cuando busco personajes por input. En el supuesto caso de que haya mas de 20 personajes, tengo que esconder los botones de paginado 