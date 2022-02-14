import '../styles/PageButtons.scss';
import { BiChevronsLeft } from 'react-icons/bi';
import { BiChevronLeft} from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronsRight } from 'react-icons/bi';


const PageButtons = () => {
    return (
        <div className='container__button-pages'>
            <button><BiChevronsLeft /></button>
            <button><BiChevronLeft /></button>
            <button><BiChevronRight /></button>
            <button><BiChevronsRight /></button>
        </div>

    )
}

export default PageButtons;