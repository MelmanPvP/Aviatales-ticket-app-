import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { companyReducer, transferFiltersReducer } from './slice'
import ticketsReducer from './tickets'

const rootReducer = combineReducers({
    company: companyReducer,
    transferFilters: transferFiltersReducer,
    tickets: ticketsReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store: ReturnType<typeof configureStore> = configureStore({
    reducer: rootReducer,
})
export default store