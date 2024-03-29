import imgNotFound from '../../assets/notFound.jpg';
import './SearchNotFound.scss';

const SearchNotFound = () => {
    return (
        <article className="container__notfoundsearch">
            <h2 className='h2__searchnotfound'>Sorry, but we couldn't find anything related</h2>
            <div className='container__img-notfound'>
                <img src={imgNotFound} alt="Rick and Morty couldn't find what you are looking for"></img>
            </div>
        </article>
    )
}

export default SearchNotFound;