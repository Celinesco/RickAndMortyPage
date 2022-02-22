import './App.scss';
import NavBar from './components/NavBar/NavBar';
import MrMeeseeksBox from './assets/MrMeeseeksBox.png';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterSection from './components/CharactersSection/CharacterSection';
import EpisodeSection from "./components/EpisodesSection/EpisodeSection";
import LocationSection from "./components/LocationsSection/LocationSection";
import { useState } from "react";
import MainSection from "./components/MainSection/MainSection";
import EpisodeDetails from './components/EpisodesSection/EpisodeDetails'
import CharacterDetails from './components/CharactersSection/CharacterDetails';




const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchedResults, setSearchedResults] = useState([]);
  const [visibleOption, setVisibleOption] = useState(false)
  const [visibleBox, setVisibleBox] = useState(true);
  const [navMenu, setNavMenu] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [searchNotFound, setSearchNotFound] = useState(false)


  const resetValues = () => {
    setPage(1)
    setSearch([])

  }
  const handleBoxClick = () => {
    setVisibleBox(false)
    setVisibleOption(true)
  }
  const handleClickLinkMenu = () => {
    setPage(1)
    setNavMenu(false)
  }

  const handleClickLogo = () => {
    setVisibleBox(true)
    setVisibleOption(false)
  }
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
      <BrowserRouter>
        <NavBar
          resetValues={resetValues}
          imgBox={MrMeeseeksBox}
          handleClickLogo={handleClickLogo}
          handleClickLinkMenu={handleClickLinkMenu}
          setNavMenu={setNavMenu}
          setPage={setPage}
          handleBoxClick={handleBoxClick}
          navMenu={navMenu}
        />
        <Routes>
          <Route path="*" element={<MainSection
            resetValues={resetValues}
            visibleBox={visibleBox}
            visibleOption={visibleOption}
            handleBoxClick={handleBoxClick} />}
          />
          <Route path='/RickAndMortyPage/characters'
            element={<CharacterSection
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
              searchNotFound={searchNotFound}
              setSearchNotFound={setSearchNotFound}
              totalResults={totalResults}
              setTotalResults={setTotalResults} />}
          />
          <Route path='/RickAndMortyPage/characters/:idCharacter' element={<CharacterDetails />} />
          <Route path='/RickAndMortyPage/episodes'
            element={<EpisodeSection
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
              searchNotFound={searchNotFound}
              setSearchNotFound={setSearchNotFound}
              searchedResults={searchedResults}
              totalResults={totalResults}
              setTotalResults={setTotalResults} />}
          />
          <Route path='/RickAndMortyPage/episodes/:idEpisode' element={<EpisodeDetails />} />
          <Route path='/RickAndMortyPage/locations'
            element={<LocationSection
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
              searchNotFound={searchNotFound}
              setSearchNotFound={setSearchNotFound}
              totalResults={totalResults}
              setTotalResults={setTotalResults}
            />}
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