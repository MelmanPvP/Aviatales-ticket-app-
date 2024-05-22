import css from './price-filter.module.scss';
export default function PriceFilter () {

                  return (
                      <div className={css.filters}>
                          <div className={css.filter + ' ' + css.cheapest }>Самый дешёвый</div>
                          <div className={css.filter + ' ' + css.fastest}>Самый быстрый</div>
                          <div className={css.filter + ' ' + css.optimal}>Самый оптимальный</div>
                      </div>
                  )
}