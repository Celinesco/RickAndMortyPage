import CharactersContainer from "./CharactersContainer/CharactersContainer";
import '../../styles/SectionsBackground.scss'
import Form from '../Form/Form';
import { useEffect, useState } from 'react';
import PageButtons from "../PageButtons/PageButtons";
import CharacterDetails from './CharacterDetails/CharacterDetails';

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

    const [characterDetailsModal, setCharacterDetailsModal] = useState(false)
    const [characterId, setCharacterId] = useState(1)

    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`) 
        .then ((res) => res.json())
        .then ((data) => {
            setSearchedResults(data.results)
            setTotalPages(data.info.pages)
        })
    }, [search, page]);

  

    const handleCardClick = (e) => {
        setCharacterDetailsModal(true)
        setCharacterId(e.currentTarget.id)
    }

    const handleCloseDetails = () => {
        setCharacterDetailsModal(false)
    }

    return (
        <section className="section__characters">
            {characterDetailsModal && <CharacterDetails 
            characterId={characterId}
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