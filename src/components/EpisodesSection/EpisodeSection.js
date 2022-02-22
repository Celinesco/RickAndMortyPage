import EpisodesContainer from "./EpisodesContainer";
import Form from "../Form/Form";
import { useEffect, useState } from 'react';
import PageButtons from "../PageButtons/PageButtons";
import SearchNotFound from "../SerachNotFound/SearchNotFound";

const EpisodeSection = (
    {
        search,
        setSearchedResults,
        searchedResults,
        searchNotFound,
        setSearchNotFound,
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

   
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/?page=${page}&name=${search}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.results === undefined) {
                    setSearchNotFound(true)
                    setSearchedResults([])
                }
                else {
                    setSearchNotFound(false)
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
            {searchNotFound && <SearchNotFound />}
            <EpisodesContainer 
            searchNotFound={searchNotFound}
            searchedResults={searchedResults}
            totalResults={totalResults}
            />
            {!searchNotFound && <PageButtons 
            page={page}
            totalPages={totalPages}
            nextPage={nextPage}
            previousPage={previousPage}
            lastPage = {lastPage}
            firstPage={firstPage}
            />}
        </section>
    )
}

export default EpisodeSection;