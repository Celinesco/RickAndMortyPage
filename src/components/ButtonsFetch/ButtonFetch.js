import './ButtonFetch.scss'


const ButtonFetch = ({message, openSection}) => {
    return (
        <button onClick={openSection} className='button__fetch'>
            {message}
        </button>
    )
}

export default ButtonFetch;