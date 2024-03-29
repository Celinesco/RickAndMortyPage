import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from './components/Section';
import { useState } from "react";
import MainSection from "./components/MainSection/MainSection";
import EpisodeDetails from './components/EpisodesSection/EpisodeDetails'
import CharacterDetails from './components/CharactersSection/CharacterDetails';
import Error404 from './components/Error404/Error404';


const App = () => {
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
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
  
 
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar
          resetValues={resetValues}
          handleClickLogo={handleClickLogo}
          handleBoxClick={handleBoxClick}
          setPage={setPage} />
        <Routes>
          <Route path="/" element={<MainSection
            resetValues={resetValues}
            visibleBox={visibleBox}
            visibleOption={visibleOption}
            handleBoxClick={handleBoxClick} />}
          />
          <Route path='/characters'
            element={<Section
              parametroDeBusqueda="character"
              page={page}
              setPage={setPage}
              search={search}
              setSearch={setSearch}/>}
          />
          <Route path='/characters/:idCharacter' element={<CharacterDetails />} />
          <Route path='/episodes'
            element={<Section
              parametroDeBusqueda="episode"
              page={page}
              setPage={setPage}
              search={search}
              setSearch={setSearch}/>}
          />
          <Route path='/episodes/:idEpisode' element={<EpisodeDetails />} />
          <Route path='/locations'
            element={<Section
              parametroDeBusqueda="location"
              page={page}
              setPage={setPage}
              search={search}
              setSearch={setSearch}/>}
          />
          <Route path='/*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


// <a href='https://www.freepik.es/vectores/silueta'>Vector de Silueta creado por freepik - www.freepik.es</a>

// https://media.giphy.com/media/l0Iyei5MxFUMpoPAI/giphy.gif