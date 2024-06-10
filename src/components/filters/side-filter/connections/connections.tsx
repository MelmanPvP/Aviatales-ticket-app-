import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTransferFilters } from '../../../../store/slice';
import { RootState } from '../../../../store/store';
import css from './connections.module.scss';

const ConnectionsFilter: React.FC<{ className?: string }> = ({ className }) => {
    const dispatch = useDispatch();
    const selectedTransfers = useSelector((state: RootState) => state.transferFilters);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        dispatch(setTransferFilters({ [name]: checked }));
    };

    return (
        <div className={`${css.filter} ${className}`}>
            <p className={css.title}>Количество пересадок</p>
            <label className={css.mark}>
                <input
                    className={css.check}
                    type="checkbox"
                    name="transfer0"
                    checked={selectedTransfers.transfer0}
                    onChange={handleChange}
                />
                <span className={css.text}>Без пересадок</span>
            </label>
            <label className={css.mark}>
                <input
                    className={css.check}
                    type="checkbox"
                    name="transfer1"
                    checked={selectedTransfers.transfer1}
                    onChange={handleChange}
                />
                <span className={css.text}>1 пересадка</span>
            </label>
            <label className={css.mark}>
                <input
                    className={css.check}
                    type="checkbox"
                    name="transfer2"
                    checked={selectedTransfers.transfer2}
                    onChange={handleChange}
                />
                <span className={css.text}>2 пересадки</span>
            </label>
            <label className={css.mark}>
                <input
                    className={css.check}
                    type="checkbox"
                    name="transfer3"
                    checked={selectedTransfers.transfer3}
                    onChange={handleChange}
                />
                <span className={css.text}>3 пересадки</span>
            </label>
        </div>
    );
};

export default ConnectionsFilter;
