import EpisodesContainer from "./EpisodesContainer";
import Form from "./Form";
import { useEffect } from 'react';
import PageButtons from "./PageButtons";
import '../styles/EpisodeSection.scss'

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
        setTotalPages,
    }) => {


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/?page=${page}&name=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchedResults(data.results)
                setTotalPages(data.info.pages)
            })

    }, [search, page]);

    return (
        <section className="episode__section">
            <Form
                handleOnChange={handleOnChange}
                handleClick={handleClick}
            />
            <EpisodesContainer searchedResults={searchedResults}/>
            <PageButtons 
            nextPage={nextPage}
            previousPage={previousPage}
            lastPage = {lastPage}
            firstPage={firstPage}
            />
        </section>
    )
}

export default EpisodeSection;