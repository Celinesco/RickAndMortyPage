import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from './components/Section';
import { useState } from "react";
import MainSection from "./components/MainSection/MainSection";
import EpisodeDetails from './components/EpisodesSection/EpisodeDetails'
import CharacterDetails from './components/CharactersSection/CharacterDetails';




const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [searchedResults, setSearchedResults] = useState([]);
  const [visibleOption, setVisibleOption] = useState(false)
  const [visibleBox, setVisibleBox] = useState(true);

  
  const resetValues = () => {
    setPage(1)
    setSearch([])
  };
  const handleBoxClick = () => {
    setVisibleBox(false)
    setVisibleOption(true)
  };

  const handleClickLogo = () => {
    setVisibleBox(true)
    setVisibleOption(false)
  };
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  };
  const handleClick = () => {
    setSearch(inputValue)
    setPage(1)
  };


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar
          resetValues={resetValues}
          handleClickLogo={handleClickLogo}
          handleBoxClick={handleBoxClick}
          setPage={setPage} />
        <Routes>
          <Route path="*" element={<MainSection
            resetValues={resetValues}
            visibleBox={visibleBox}
            visibleOption={visibleOption}
            handleBoxClick={handleBoxClick} />}
          />
          <Route path='/RickAndMortyPage/characters'
            element={<Section
              parametroDeBusqueda="character"
              input={inputValue}
              search={search}
              page={page}
              handleOnChange={handleOnChange}
              handleClick={handleClick}
              setPage={setPage}
              setSearchedResults={setSearchedResults}
              searchedResults={searchedResults}/>}
          />
          <Route path='/RickAndMortyPage/characters/:idCharacter' element={<CharacterDetails />} />
          <Route path='/RickAndMortyPage/episodes'
            element={<Section
              parametroDeBusqueda="episode"
              input={inputValue}
              search={search}
              page={page}
              setPage={setPage}
              handleOnChange={handleOnChange}
              handleClick={handleClick}
              setSearchedResults={setSearchedResults}
              searchedResults={searchedResults} />}
          />
          <Route path='/RickAndMortyPage/episodes/:idEpisode' element={<EpisodeDetails />} />
          <Route path='/RickAndMortyPage/locations'
            element={<Section
              parametroDeBusqueda="location"
              input={inputValue}
              search={search}
              page={page}
              setPage={setPage}
              handleOnChange={handleOnChange}
              handleClick={handleClick}
              setSearchedResults={setSearchedResults}
              searchedResults={searchedResults} />}
          />
        </Routes>
        <Footer />

      </BrowserRouter>




    </div>
  );
}

export default App;


// <a href='https://www.freepik.es/vectores/silueta'>Vector de Silueta creado por freepik - www.freepik.es</a>

// https://media.giphy.com/media/l0Iyei5MxFUMpoPAI/giphy.gif