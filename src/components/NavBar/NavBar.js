import { Link } from "react-router-dom";
import './NavBar.scss'
import { BiMenu } from "react-icons/bi";
import NavBarMenu from '../NavBarMenu/NavBarMenu';



const NavBar = ({ imgBox, handleClickLogo, handleClickLinkMenu, setNavMenu, setPage, handleBoxClick, navMenu, resetValues }) => {

    return (
        <div>
            <nav className='navbar'>
                <Link to="/" className='container__box-mrmeeseeks'>
                    <button onClick={handleBoxClick} >
                        <img src={imgBox} alt="Meeseeks-box"></img>
                    </button>
                </Link>

                <Link onClick={handleClickLogo} to="/"><p className='p__logo'>
                    Rick and Morty
                </p>
                </Link>
                <button className="button__menunavbar" onClick={() => setNavMenu(true)}><BiMenu /></button>
                {navMenu && <NavBarMenu
                    handleClickLinkMenu={handleClickLinkMenu}
                    setNavMenu={setNavMenu} />}
                <ul className='navbar__ul'>
                    <li><Link onClick={resetValues} to="/RickAndMortyPage/characters">CHARACTERS</Link></li>
                    <li><Link onClick={resetValues} to="/RickAndMortyPage/episodes">EPISODES</Link></li>
                    <li><Link onClick={resetValues} to="/RickAndMortyPage/locations">LOCATIONS</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;