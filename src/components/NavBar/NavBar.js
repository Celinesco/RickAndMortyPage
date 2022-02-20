import { Link } from "react-router-dom";
import './NavBar.scss'
import { BiMenu } from "react-icons/bi";
import NavBarMenu from '../NavBarMenu/NavBarMenu'



const NavBar = ({ imgBox, handleClickLogo, handleClickLinkMenu, setNavMenu, setPage, handleBoxClick, navMenu }) => {

    return (
        <div>
            <nav className='navbar'>
                <Link to="/">
                    <button onClick={handleBoxClick} className='container__box-mrmeeseeks'>
                        <img src={imgBox}></img>
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
                    <li><Link onClick={() => setPage(1)} to="/characters">CHARACTERS</Link></li>
                    <li><Link onClick={() => setPage(1)} to="/episodes">EPISODES</Link></li>
                    <li><Link onClick={() => setPage(1)} to="/locations">LOCATIONS</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;