import CardContainer from "./CardContainer";
import '../styles/CharacterSection.scss'
import Form from './Form';
import { useState, useEffect } from 'react';
import PageButtons from "./PageButtons";




const CharacterSection = () => {
    const [valorDelInput, setValorDelInput] = useState("");
    const [personajes, setPersonajes] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
 
  
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`) 
        .then ((res) => res.json())
        .then ((data) => {
            setPersonajes(data.results)
        })

    }, [busqueda]);

    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    const handleClick = () => {
        setBusqueda(valorDelInput)
    }


    return (
        <section className="section__characters">
            <Form 
            handleChange={handleChange}
            handleClick={handleClick}
            />

            <CardContainer personajes={personajes}/>
            <PageButtons />
        </section>

    )
}

export default CharacterSection;