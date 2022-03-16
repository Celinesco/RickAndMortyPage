import './Footer.scss';
import { MdPets } from "react-icons/md";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Hecho por Celines</p>
            <ul className='ul__footer'>
                <a href="https://github.com/Celinesco" target="_blank" rel="noopener noreferrer" aria-label="Cuenta de Github deCelines"><li><BsGithub /></li></a>
                <a href="https://www.linkedin.com/in/celinesalsina/" target="_blank" rel="noopener noreferrer" aria-label="Perfil Linkedin de Celines"><li><BsLinkedin /></li></a>
                <a href="mailto:celina.alsina@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar mail"><li><BsEnvelope /></li></a>
                <a href='https://celinesalsina.netlify.app/' rel="noopener noreferrer" aria-label='Portfolio de Celines'><li><MdPets /></li></a>
            </ul>
        </footer>
    )
}

export default Footer;