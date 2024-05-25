import PriceFilter from "../filters/price-fliter/price-filter.tsx";
import Title from "../title/title.tsx";
import ConnectionsFilter from "../filters/side-filter/connections/connections.tsx";
import CompaniesFilter from "../filters/side-filter/companies/companies.tsx";
import css from "../../App.module.scss";

import {useEffect, useState} from "react";
import {fetchTickets} from "../../store/tickets.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export default function Layout () {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenClose = () => {
        setIsOpen(!isOpen)
    }

    const dispatch = useDispatch();
    const { tickets, error, status } = useSelector((state: RootState) => state.tickets)

    useEffect(() => {
        dispatch(fetchTickets())
    }, [dispatch])
    const calculateFlightDuration = (startTime: string, endTime: string): string => {
        const start = new Date(`2022-01-01T${startTime}:00Z`);
        const end = new Date(`2022-01-01T${endTime}:00Z`);

        if (end <= start) {
            end.setDate(end.getDate() + 1);
        }

        const duration = end.getTime() - start.getTime();
        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.round((duration / (1000 * 60)) % 60);
        return `${hours} ч ${minutes} мин`;
    };
    return (
        <>

        <PriceFilter/>
        <Title/>
        <div className="filter__wrapper">
            <div className="filter__menu">
                <div className="filter__lists">
                    <div className="filter__list">
                        <span className="filter__item">Любая авиакомпания </span>
                        <span className="filter__item"> любое кол-во пересадок</span>
                    </div>
                    <div className="filter__list">
                        <span className="filter__item">{isOpen ? 'Закрыть настройки' : 'Открыть настройки'} </span>
                        <img onClick={handleOpenClose} className='arrow__btn'
                             style={{transform: isOpen ? 'rotate(180deg)' : 'none'}} src='../icons/arrow.svg'
                             alt='arrow'/>
                    </div>
                </div>
                {isOpen &&
                    <div className='tablet__wrapper'>
                        <CompaniesFilter className="tablet"/>
                        <ConnectionsFilter className="tablet"/>
                    </div>}
            </div>
        </div>
        <div className="result__wrapper">
            {status === 'loading' &&
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                </div>}
            {status === 'error' && <p>Error: {error}</p>}
            {status === 'success' &&
                tickets.map((ticket) => (
                    <div className='result__item' key={ticket.id}>
                        <div className="title__wrapper">
                            <div className="result__price">{ticket.price} {ticket.currency}</div>
                            <img className="result__logo" src={`./public/${ticket.company}.svg`} alt="air-company"/>
                        </div>
                        <div className="details__wrapper">
                            <div className="location">
                                <div className="from-to__wrapper">
                                    <span className="from">{ticket.from} </span>
                                    <span className="dash">-</span>
                                    <span className="to">{ticket.to}</span>
                                </div>
                                <div className="from-time__wrapper">
                                    <span className="from-time">{ticket.time.startTime}</span>
                                    <span className="dash-active">-</span>
                                    <span className="from-to"> {ticket.time.endTime}</span>
                                </div>
                            </div>
                            <div className="on-way">
                                <span className="on-way__title">В пути</span>
                                <span
                                    className="on-way__time">{calculateFlightDuration(ticket.time.startTime, ticket.time.endTime)} </span>
                            </div>
                            <div className="result__transfers">
                                <span className="transfers__title">Пересадки</span>
                                <span
                                    className="transfers__desc"> {ticket.connectionAmount === 0 ? 'Без пересадок' : ticket.connectionAmount === 1 ? '1 пересадка' : `${ticket.connectionAmount} пересадки`}</span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <button className="btn__more">Загрузить еще билеты</button>

    <div className={css.tickets}>


    </div>
</>
)
}