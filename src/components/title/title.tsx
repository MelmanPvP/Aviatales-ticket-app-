import plane from "../../../dist/plane.svg";
import css from "./title.module.scss";
export default function Title () {
    return (
        <div>
            <img src={plane} className={css.plane} alt={'самолет'}></img>
            <span className={css.title}>Поиск авиабилетов</span>
        </div>
    )
}