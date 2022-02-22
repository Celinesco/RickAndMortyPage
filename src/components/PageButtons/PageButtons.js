import './PageButtons.scss';
import { BiChevronsLeft } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronsRight } from 'react-icons/bi';


const PageButtons = ({ page, totalPages, nextPage, previousPage, lastPage, firstPage }) => {
    return (
        <div className='container__button-pages'>
            <button><BiChevronsLeft onClick={firstPage} /></button>
            <button><BiChevronLeft onClick={previousPage} /></button>
            <div className='container__total-pages'>
                <p className='total-pages'>{page} of {totalPages}</p>
            </div>
            <button onClick={nextPage}><BiChevronRight /></button>
            <button><BiChevronsRight onClick={lastPage} /></button>
        </div>

    )
}

export default PageButtons;