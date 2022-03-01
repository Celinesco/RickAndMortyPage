import './PageButtons.scss';
import { BiChevronsLeft } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronsRight } from 'react-icons/bi';


const PageButtons = ({ page, setPage, totalPages }) => {

    const nextPage = () => page !== totalPages && setPage(page + 1);
    const previousPage = () => page !== 1 && setPage(page - 1);
    const lastPage = () =>  page !== totalPages && setPage(totalPages);
    const firstPage = () => page !== 1 && setPage(1);

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