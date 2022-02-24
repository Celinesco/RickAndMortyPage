import './NavBarMenu.scss'
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";

const NavBarMenu = ({handleClickLinkMenu, setNavMenu}) => {
    return (
        <nav className='container__navbar-menu'>
            <button onClick={() => setNavMenu(false)} className='button__close-nav-menu'><BiX /></button>
             <ul className='ul__navmenu'>
                    <li><Link onClick={()=>setNavMenu(false)}to="/">HOME</Link></li>
                    <li><Link onClick={handleClickLinkMenu} to="/RickAndMortyPage/characters">CHARACTERS</Link></li>
                    <li><Link onClick={handleClickLinkMenu} to="/RickAndMortyPage/episodes">EPISODES</Link></li>
                    <li><Link onClick={handleClickLinkMenu} to="/RickAndMortyPage/locations">LOCATIONS</Link></li>
            </ul>
        </nav>
    )
}

export default NavBarMenu;