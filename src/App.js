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
  return (
    <div className='App'>
      <NavBar imgBox={MrMeeseeksBox} />
        
      <Footer />

    </div>
  );
}

export default App;

// preguntas Male

// / Y como se le pasan parametros a las funciones. (esta pregunta no me acuerdo por que me surgio)
// Animaciones 

// <a href='https://www.freepik.es/vectores/silueta'>Vector de Silueta creado por freepik - www.freepik.es</a>

// https://media.giphy.com/media/l0Iyei5MxFUMpoPAI/giphy.gif