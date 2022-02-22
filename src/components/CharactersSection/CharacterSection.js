import CharactersContainer from "./CharactersContainer";
import Form from '../Form/Form';
import { useEffect, useState } from 'react';
import PageButtons from "../PageButtons/PageButtons";
import SearchNotFound from "../SerachNotFound/SearchNotFound";

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


    const [characterNotFound, setCharacterNotFound] = useState(false)
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`) 
        .then ((res) => res.json())
        .then ((data) => {
            if (data.results === undefined) {
                setCharacterNotFound(true)
                setSearchedResults([])
            }
            else {
                setCharacterNotFound(false)
                setSearchedResults(data.results)
                setTotalPages(data.info.pages)
            }
        })
    }, [search, page]);
  

    return (
        <section className="section__characters">
            <Form 
            handleOnChange={handleOnChange}
            handleClick={handleClick}
            />
            {characterNotFound && <SearchNotFound />}
            <CharactersContainer 
            searchedResults={searchedResults}
            />
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