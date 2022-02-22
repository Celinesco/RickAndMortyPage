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

        const [episodeNotFound, setEpisodeNotFound] = useState(false)


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/?page=${page}&name=${search}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.results === undefined) {
                    setEpisodeNotFound(true)
                    setSearchedResults([])
                }
                else {
                    setEpisodeNotFound(false)
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
            {episodeNotFound && <SearchNotFound />}
            <EpisodesContainer 
            searchedResults={searchedResults}
            totalResults={totalResults}
            />
            <PageButtons 
            page={page}
            totalPages={totalPages}
            nextPage={nextPage}
            previousPage={previousPage}
            lastPage = {lastPage}
            firstPage={firstPage}
            />
        </section>
    )
}

export default EpisodeSection;