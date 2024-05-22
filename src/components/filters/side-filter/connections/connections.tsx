import css from './connections.module.scss'
import React,{ChangeEvent, useState} from "react";
interface ConnectionsProps {
    className?:string
}
interface ConnectionsState {
    transfer0: boolean;
    transfer1: boolean;
    transfer2: boolean;
    transfer3: boolean;
}
 const ConnectionsFilter: React.FC<ConnectionsProps> = () => {
        const [Connections, setConnections] = useState<ConnectionsState>(
            {
                transfer0: false,
                transfer1: false,
                transfer2: false,
                transfer3: false
            }
        )

    const handleCheckChange =(event:ChangeEvent<HTMLInputElement>) => {
        const {name, checked} =event.target;
        setConnections({...Connections, [name]: checked});
    }
    return(
        <div className={css.filter}>
            <p className={css.title}>Количество пересадок</p>
            <label className={css.mark}>
                <input className={css.check}
                    type="checkbox"
                    name="transfer0"
                    checked={Connections.transfer0}
                    onChange={handleCheckChange}/>
                <span className={css.text}>Без пересадок</span>
            </label>
            <label className={css.mark}>
                <input className={css.check}
                    type="checkbox"
                    name="transfer1"
                    checked={Connections.transfer1}
                    onChange={handleCheckChange}/>
                <span className={css.text}>1 пересадка</span>
            </label>
            <label className={css.mark}>
            <input className={css.check}
                type="checkbox"
                name="transfer2"
                checked={Connections.transfer2}
                onChange={handleCheckChange}/>
            <span className={css.text}>2 пересадки</span>
        </label>
            <label className={css.mark}>
            <input className={css.check}
                type="checkbox"
                name="transfer3"
                checked={Connections.transfer3}
                onChange={handleCheckChange}/>
            <span className={css.text}>3 пересадки</span>
        </label>
        </div>
    )
 }
export default ConnectionsFilter;