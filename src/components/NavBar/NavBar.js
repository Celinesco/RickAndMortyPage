import './NavBar.scss'


const NavBar = ({imgBox, logo}) => {
    return (
        <nav className='navbar'>
            <button className='container__box-mrmeeseeks'>
                <img src={imgBox}></img>
            </button>
            <p className='p__logo'>
                Rick and Morty
            </p>
            <ul className='navbar__ul'>
                <li><a href='#'>CHARACTERS</a></li>
                <li><a href='#'>EPISODES</a></li>
                <li><a href='#'>LOCATIONS</a></li>
            </ul>

        </nav>
    )
}

export default NavBar;