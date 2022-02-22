import LocationsContainer from "./LocationsContainer";
import Form from "../Form/Form";
import { useEffect, useState } from 'react';
import PageButtons from "../PageButtons/PageButtons";
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
        totalPages,
        setTotalPages,
        totalResults,
        setTotalResults
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
                    setTotalResults(data.info.count)
                }
            })

    }, [search, page]);


    return (
        <section className="sections__styles">
            <Form
                handleOnChange={handleOnChange}
                handleClick={handleClick}
            />
            {locationNotFound && <SearchNotFound />}
            <LocationsContainer
                searchedResults={searchedResults}
            />
            <PageButtons
                page={page}
                totalPages={totalPages}
                nextPage={nextPage}
                previousPage={previousPage}
                lastPage={lastPage}
                firstPage={firstPage}
            />
        </section>
    )
}

export default LocationSection;