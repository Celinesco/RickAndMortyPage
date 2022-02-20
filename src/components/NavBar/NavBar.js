import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CharacterSection from "../CharactersSection/CharacterSection";
import EpisodeSection from "../EpisodesSection/EpisodeSection";
import LocationSection from "../LocationsSection/LocationSection";
import './NavBar.scss'
import { useState } from "react";
import MainSection from "../MainSection/MainSection";
import { BiMenu } from "react-icons/bi";
import NavBarMenu from '../NavBarMenu/NavBarMenu'


const NavBar = ({ imgBox }) => {

    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchedResults, setSearchedResults] = useState([]);
    const [visibleOption, setVisibleOption] = useState(false)
    const [visibleBox, setVisibleBox] = useState(true);
    const [navMenu, setNavMenu] = useState(false);

    
    const handleBoxClick = () => {
        setVisibleBox(false)
        setVisibleOption(true)
    }
    const handleClickLinkMenu = () => {
        setPage(1)
        setNavMenu(false)
    }
    
    const handleClickLogo = () => {
        setVisibleBox(true)
        setVisibleOption(false)
    }
    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    };
    const handleClick = () => {
        setSearch(inputValue)
        setPage(1)
    };
    const nextPage = () => {
        if (page !== totalPages)
            setPage(page + 1)
    };
    const previousPage = () => {
        if (page !== 1)
            setPage(page - 1)
    };
    const lastPage = () => {
        setPage(totalPages)
    };
    const firstPage = () => {
        setPage(1)
    };

    return (
        <BrowserRouter>
            <nav className='navbar'>
                <button onClick={handleBoxClick} className='container__box-mrmeeseeks'>
                    <img src={imgBox}></img>
                </button>
                <Link onClick={handleClickLogo} to="/"><p className='p__logo'>
                    Rick and Morty
                </p>
                </Link>
                <button className="button__menunavbar" onClick={()=> setNavMenu(true)}><BiMenu /></button>
                {navMenu && <NavBarMenu 
                handleClickLinkMenu={handleClickLinkMenu}
                setNavMenu={setNavMenu}/>}
                <ul className='navbar__ul'>
                    <li><Link onClick={() => setPage(1)} to="/characters">CHARACTERS</Link></li>
                    <li><Link onClick={() => setPage(1)} to="/episodes">EPISODES</Link></li>
                    <li><Link onClick={() => setPage(1)} to="/locations">LOCATIONS</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="*" element={<MainSection
                    visibleBox={visibleBox}
                    visibleOption={visibleOption}
                    handleBoxClick={handleBoxClick}/>}
                />
                <Route path="/characters"
                    element={<CharacterSection
                        input={inputValue}
                        search={search}
                        page={page}
                        totalPages={totalPages}
                        handleOnChange={handleOnChange}
                        handleClick={handleClick}
                        firstPage={firstPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        lastPage={lastPage}
                        setTotalPages={setTotalPages}
                        setSearchedResults={setSearchedResults}
                        searchedResults={searchedResults} />}
                />
                <Route path="/episodes"
                    element={<EpisodeSection
                        input={inputValue}
                        search={search}
                        page={page}
                        totalPages={totalPages}
                        handleOnChange={handleOnChange}
                        handleClick={handleClick}
                        firstPage={firstPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        lastPage={lastPage}
                        setTotalPages={setTotalPages}
                        setSearchedResults={setSearchedResults}
                        searchedResults={searchedResults} />}
                />
                <Route path="/locations"
                    element={<LocationSection
                        input={inputValue}
                        search={search}
                        page={page}
                        totalPages={totalPages}
                        handleOnChange={handleOnChange}
                        handleClick={handleClick}
                        firstPage={firstPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        lastPage={lastPage}
                        setTotalPages={setTotalPages}
                        setSearchedResults={setSearchedResults}
                        searchedResults={searchedResults}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar;