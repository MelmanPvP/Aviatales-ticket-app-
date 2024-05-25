import React,{useState} from "react";
import css from './companies.module.scss'
interface CompanyFiltersProps{
    className?: string;
}
interface CompaniesState {
    name:string
}
const  CompaniesFilter: React.FC<CompanyFiltersProps> = () => {
    const [companies, setCompanies] = useState<CompaniesState[]>( [
        {
        name:'Победа'
        },
        {
            name: 'Red Wings'
        },
        {
            name: 'S7 Airlines'
        }
        ])
    return (
        <div className={css.companies}>
             <p className={css.title}>Компании</p>
            {companies.map((item,index)=> (
                <label key={index} className={css.info}>
                    <input
                        className={css.circle}
                        type="checkbox"
                        name={item.name}
                    />
                    <span className={css.text}> {item.name}</span>
                </label>
            ))}
        </div>
    )
}
export default CompaniesFilter