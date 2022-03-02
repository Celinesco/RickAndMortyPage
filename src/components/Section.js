import CharactersContainer from "./CharactersSection/CharactersContainer";
import EpisodesContainer from "./EpisodesSection/EpisodesContainer";
import LocationsContainer from "./LocationsSection/LocationsContainer";
import Form from './Form/Form';
import { useEffect, useState } from 'react';
import PageButtons from "./PageButtons/PageButtons";
import SearchNotFound from "./SerachNotFound/SearchNotFound";

const Section = (
    {
        parametroDeBusqueda,
        search,
        setSearch,
        page,
        setPage,

    }) => {

    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [searchNotFound, setSearchNotFound] = useState(false);
    const [searchedResults, setSearchedResults] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/${parametroDeBusqueda}/?page=${page}&name=${search}`)
            .then((res) => res.json())
            .then((data) => {
                    setSearchNotFound(Boolean(!data.results)) 
                    setSearchedResults(data.results ? data.results : []) 
                    setTotalPages(data?.info?.pages || 0)
                    setTotalResults(data?.info?.count || 0)
                })
    }, [search, page, parametroDeBusqueda]);


    return (
        <section className="sections__styles">
            <Form
                setSearch={setSearch}
                setPage={setPage}
            />
            {searchNotFound && <SearchNotFound />}

            {parametroDeBusqueda === "character" &&
                <CharactersContainer
                    searchNotFound={searchNotFound}
                    searchedResults={searchedResults}
                    totalResults={totalResults} />}
            
            {parametroDeBusqueda === "episode" &&
                <EpisodesContainer
                    searchNotFound={searchNotFound}
                    searchedResults={searchedResults}
                    totalResults={totalResults} />}
            
            {parametroDeBusqueda === "location" &&
                <LocationsContainer
                    searchNotFound={searchNotFound}
                    searchedResults={searchedResults}
                    totalResults={totalResults} />}
            
            {!searchNotFound && <PageButtons
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />}
        </section>
    )
}

export default Section;