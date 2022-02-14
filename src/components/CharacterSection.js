import CardContainer from "./CardContainer";
import '../styles/CharacterSection.scss'
import Form from './Form';
import { useState, useEffect } from 'react';
import PageButtons from "./PageButtons";




const CharacterSection = () => {
    const [valorDelInput, setValorDelInput] = useState("");
    const [personajes, setPersonajes] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
 
  
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`) 
        .then ((res) => res.json())
        .then ((data) => {
            setPersonajes(data.results)
            setTotalPages(data.info.pages)
        })

    }, [busqueda]);


    console.log("a ver cuantas veces se imprime esto")

    // Como hago para que no se active este useEffect. 
    //Solo quiero que se active cuando envio el formulario. Deberia poner el use effect en la seccion del formulario?
    
    

    useEffect (() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`) 
        .then ((res) => res.json())
        .then ((data) => {
            setPersonajes(data.results)
        })
    } , [page])

    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }

    const handleClick = () => {
        setBusqueda(valorDelInput)
    }

    

    const nextPage = () => {
        if (page !== totalPages)
        setPage(page + 1)
    }

    const previousPage = () => {
        if (page !== 1)
        setPage(page - 1)
    }
    const lastPage = () => {
        setPage(totalPages)
    }
    const firstPage = () => {
        setPage(1)
    }


    return (
        <section className="section__characters">
            <Form 
            handleChange={handleChange}
            handleClick={handleClick}
            />

            <CardContainer personajes={personajes}/>
            <PageButtons 
            nextPage={nextPage}
            previousPage={previousPage}
            lastPage = {lastPage}
            firstPage={firstPage}
            />
        </section>

    )
}

export default CharacterSection;