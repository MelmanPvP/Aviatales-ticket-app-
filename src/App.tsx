import Title from "./components/title/title.tsx";
import Ticket from "./components/ticket/ticket.tsx";
import PriceFilter from "./components/filters/price-fliter/price-filter.tsx";
import css from './App.module.scss'
import ConnectionsFilter from "./components/filters/side-filter/connections/connections.tsx";
function App() {


  return (
    <>
        <PriceFilter />
            <Title/>
           <ConnectionsFilter/>
         <div className={css.tickets}>
             <Ticket  ></Ticket>
             <Ticket/>

         </div>
    </>
  )
}

export default App
