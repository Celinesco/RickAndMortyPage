import LocationsContainer from "./LocationsContainer";
import Form from "./Form";
import { useEffect } from 'react';
import PageButtons from "./PageButtons";
import '../styles/SectionsBackground.scss'

const LocationSection = (
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
        fetch(`https://rickandmortyapi.com/api/location/?page=${page}&name=${search}`)
            .then((res) => res.json())
            .then((data) => {
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
            <LocationsContainer searchedResults={searchedResults}/>
            <PageButtons
                nextPage={nextPage}
                previousPage={previousPage}
                lastPage={lastPage}
                firstPage={firstPage}
            />
        </section>
    )
}

export default LocationSection;