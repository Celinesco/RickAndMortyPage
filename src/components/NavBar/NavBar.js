import { Link } from "react-router-dom";
import './NavBar.scss'
import { BiMenu } from "react-icons/bi";
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import MrMeeseeksBox from '../../assets/MrMeeseeksBox.png';
import { useState } from "react";


const NavBar = ({setPage, handleClickLogo, handleBoxClick, resetValues }) => {
    const [navMenu, setNavMenu] = useState(false);
    const handleClickLinkMenu = () => {
        setPage(1)
        setNavMenu(false)
      };

    return (
        <div>
            <nav className='navbar'>
                <Link to="/" className='container__box-mrmeeseeks'>
                    <button onClick={handleBoxClick} >
                        <img src={MrMeeseeksBox} alt="Meeseeks-box"></img>
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
                    <li><Link onClick={resetValues} to="/characters">CHARACTERS</Link></li>
                    <li><Link onClick={resetValues} to="/episodes">EPISODES</Link></li>
                    <li><Link onClick={resetValues} to="/locations">LOCATIONS</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;