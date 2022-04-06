import './Error404.scss';
import dimensionPortal from '../../assets/dimensionPortal.png'

const Error404 = () => {
    return (
        <div className='container__error404'>
            <h2>Er404: Page not found</h2>
            <p>You've entered an unkown dimension</p>
            <div className='container__img-error404'>
                <img src={dimensionPortal} alt="Open portal"></img>
            </div>
        </div>
    )
}

export default Error404