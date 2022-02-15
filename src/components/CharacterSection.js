import CharactersContainer from "./CharactersContainer";
import '../styles/SectionsBackground.scss'
import Form from './Form';
import { useEffect, useState } from 'react';
import PageButtons from "./PageButtons";
import CharacterDetails from './CharacterDetails';

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
    const [characterDetails, setCharacterDetails] = useState(false)

    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`) 
        .then ((res) => res.json())
        .then ((data) => {
            setSearchedResults(data.results)
            setTotalPages(data.info.pages)
        })
    }, [search, page]);

    

    const handleCardClick = () => {
        setCharacterDetails(true)
    }

    const handleCloseDetails = () => {
        setCharacterDetails(false)
    }

    return (
        <section className="section__characters">
            {characterDetails && <CharacterDetails 
            handleCloseDetails={handleCloseDetails}
            />}
            <Form 
            handleOnChange={handleOnChange}
            handleClick={handleClick}
            />
            <CharactersContainer 
            searchedResults={searchedResults}
            handleCardClick={handleCardClick}
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