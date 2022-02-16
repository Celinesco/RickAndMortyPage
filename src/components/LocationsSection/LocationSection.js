import LocationsContainer from "./LocationsContainer";
import Form from "../Form/Form";
import { useEffect, useState } from 'react';
import PageButtons from "../PageButtons/PageButtons";
import '../../styles/SectionsBackground.scss'
import SearchNotFound from "../SerachNotFound/SearchNotFound";

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

        const [locationNotFound, setLocationNotFound] = useState(false)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/?page=${page}&name=${search}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.results === undefined) {
                    setLocationNotFound(true)
                    setSearchedResults([])
                }
                else {
                    setLocationNotFound(false)
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
            {locationNotFound && <SearchNotFound />}
            <LocationsContainer 
            searchedResults={searchedResults}
            />
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