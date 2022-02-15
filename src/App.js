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
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchedResults, setSearchedResults] = useState([]);


  const loadEpisodes = () => {
    setMainSection(false)
    setEpisodeSection(true)
  };
  const loadCharacters = () => {
    setMainSection(false)
    setCharacterSection(true)
  };
  const loadLocations = () => {
    setMainSection(false)
    setLocationSection(true)
  };
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  };
  const handleClick = () => {
    setSearch(inputValue)
    setPage(1)
  };
  const nextPage = () => {
    if (page !== totalPages)
      setPage(page + 1)
  };
  const previousPage = () => {
    if (page !== 1)
      setPage(page - 1)
  };
  const lastPage = () => {
    setPage(totalPages)
  };
  const firstPage = () => {
    setPage(1)
  };




  return (
    <div className='App'>
      <NavBar imgBox={MrMeeseeBox} />
      <div className='container__img-main'>
      </div>
      {mainSection && <MainSection
        loadCharacters={loadCharacters}
        loadEpisodes={loadEpisodes}
        loadLocations={loadLocations}
      />}


      {characterSection && <CharacterSection
        input={inputValue}
        search={search}
        page={page}
        totalPages={totalPages}
        handleOnChange={handleOnChange}
        handleClick={handleClick}
        firstPage={firstPage}
        previousPage={previousPage}
        nextPage={nextPage}
        lastPage={lastPage}
        setTotalPages={setTotalPages}
        setSearchedResults = {setSearchedResults}
        searchedResults = {searchedResults}

      />}
      {episodeSection && <EpisodeSection
          input={inputValue}
          search={search}
          page={page}
          totalPages={totalPages}
          handleOnChange={handleOnChange}
          handleClick={handleClick}
          firstPage={firstPage}
          previousPage={previousPage}
          nextPage={nextPage}
          lastPage={lastPage}
          setTotalPages={setTotalPages}
          setSearchedResults = {setSearchedResults}
          searchedResults = {searchedResults}
      />}
      {locationSection && < LocationSection />}
      <Footer />

    </div>
  );
}

export default App;

// preguntas Male

// / Y como se le pasan parametros a las funciones. (esta pregunta no me acuerdo por que me surgio)
// para la cantidad de paginas totales, por que tengo que hacer una variable de estado??


// Animaciones 