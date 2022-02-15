import CharactersContainer from "./CardContainer";
import '../styles/CharacterSection.scss'
import Form from './Form';
import { useEffect } from 'react';
import PageButtons from "./PageButtons";




const CharacterSection = (
    {
    search,
    setSearchedResults,
    searchedResults,
    handleOnChange,
    handleClick,
    page,
    firstPage, 
    nextPage, 
    previousPage, 
    lastPage,
    setTotalPages,
}) => {
    
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`) 
        .then ((res) => res.json())
        .then ((data) => {
            setSearchedResults(data.results)
            setTotalPages(data.info.pages)
        })

    }, [search, page]);


    return (
        <section className="section__characters">
            <Form 
            handleOnChange={handleOnChange}
            handleClick={handleClick}
            />
            <CharactersContainer 
            searchedResults={searchedResults}/>
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