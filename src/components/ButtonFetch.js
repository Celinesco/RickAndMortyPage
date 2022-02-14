import '../styles/ButtonFetch.scss'

const ButtonFetch = ({message, section, loadCharacters, loadEpisodes, loadLocations}) => {
    const openSection = section
    if( section == loadCharacters ) {
        openSection = loadCharacters
    }
    if (section == loadEpisodes ) {
        openSection = loadEpisodes
    }
    if (section == loadLocations ) {
        openSection = loadLocations
    }

    return (
        <button onClick={openSection} className='button__fetch'>
            {message}
        </button>
    )
}

export default ButtonFetch;