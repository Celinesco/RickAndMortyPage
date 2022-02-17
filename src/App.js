import { BrowerRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import CharacterSection from './components/CharactersSection/CharacterSection';
import NavBar from './components/NavBar/NavBar';
import MrMeeseeksBox from './assets/MrMeeseeksBox.png';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import EpisodeSection from './components/EpisodesSection/EpisodeSection';
import LocationSection from './components/LocationsSection/LocationSection';



const App = () => {
  // const [characterSection, setCharacterSection] = useState(false);
  const [mainSection, setMainSection] = useState(true);
  // const [episodeSection, setEpisodeSection] = useState(false);
  // const [locationSection, setLocationSection] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  // const [search, setSearch] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [searchedResults, setSearchedResults] = useState([]);

 

  // const loadEpisodes = () => {
  //   setMainSection(false)
  //   setEpisodeSection(true)
  // };
  // const loadCharacters = () => {
  //   setMainSection(false)
  //   setCharacterSection(true)
  // };
  // const loadLocations = () => {
  //   setMainSection(false)
  //   setLocationSection(true)
  // };
  // const handleOnChange = (e) => {
  //   setInputValue(e.target.value)
  // };
  // const handleClick = () => {
  //   setSearch(inputValue)
  //   setPage(1)
  // };
  // const nextPage = () => {
  //   if (page !== totalPages)
  //     setPage(page + 1)
  // };
  // const previousPage = () => {
  //   if (page !== 1)
  //     setPage(page - 1)
  // };
  // const lastPage = () => {
  //   setPage(totalPages)
  // };
  // const firstPage = () => {
  //   setPage(1)
  // };




  return (
    <div className='App'>
      <NavBar imgBox={MrMeeseeksBox} />
      {/* <div className='container__img-main'>
      </div> */}
      {/* {mainSection && <MainSection />} */}


      {/* {characterSection && <CharacterSection
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
        setSearchedResults={setSearchedResults}
        searchedResults={searchedResults}
      />} */}
      {/* {episodeSection && <EpisodeSection
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
        setSearchedResults={setSearchedResults}
        searchedResults={searchedResults}
      />} */}

      {/* {locationSection && < LocationSection
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
        setSearchedResults={setSearchedResults}
        searchedResults={searchedResults}
      />} */}
      <Footer />

    </div>
  );
}

export default App;

// preguntas Male

// / Y como se le pasan parametros a las funciones. (esta pregunta no me acuerdo por que me surgio)
// Animaciones 

// <a href='https://www.freepik.es/vectores/silueta'>Vector de Silueta creado por freepik - www.freepik.es</a>