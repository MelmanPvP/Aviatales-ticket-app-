import React from 'react';
import css from './companies.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCompany } from '../../../../store/slice';
import { RootState } from '../../../../store/store';

interface CompanyFiltersProps {
    className?: string;
}

const CompaniesFilter: React.FC<CompanyFiltersProps> = () => {
    const dispatch = useDispatch();
    const selectedCompanies = useSelector((state: RootState) => state.company);
    const companies = [
        { name: 'Победа', key:'pobeda' },
        { name: 'Red Wings', key:'red-wings' },
        { name: 'S7 Airlines', key:'s7-airlines' },
        {name:'Aeroflot',key:'aeroflot'},
        {name: 'Utair', key:'utair'}
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        console.log('Checkbox changed:', name, checked);
        dispatch(setCompany({ [name]: checked }));
    };


    return (
        <div className={css.companies}>
            <p className={css.title}>Компании</p>
            {companies.map((item, index) => (
                <label key={index} className={css.info}>
                    <input
                        className={css.circle}
                        type="checkbox"
                        name={item.key}
                        checked={selectedCompanies[item.key]}
                        onChange={handleChange}
                    />
                    <span className={css.text}>{item.name}</span>
                </label>
            ))}
        </div>
    );
};

export default CompaniesFilter;