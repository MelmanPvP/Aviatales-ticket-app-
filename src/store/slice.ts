import { createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialTransferState = {
    transfer0: false,
    transfer1: false,
    transfer2: false,
    transfer3: false,

}
interface CompanyPayload {
    [key: string]: string
}

interface ConnectionsFiltersPayload {
    [key: string]: string | number | boolean
}
const companySlice = createSlice({
    name: 'company',
    initialState: {} as CompanyPayload,
    reducers: {
        setCompany: (state, action: PayloadAction<CompanyPayload>) => {
            return { ...state, ...action.payload }
        },
    },
})
const connectionsFiltersSlice = createSlice({
    name: 'transferSlice',
    initialState: initialTransferState,
    reducers: {
        setTransferFilters: (state, action: PayloadAction<ConnectionsFiltersPayload>) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { setCompany } = companySlice.actions
export const { setTransferFilters } = connectionsFiltersSlice.actions

export const companyReducer = companySlice.reducer
export const transferFiltersReducer = connectionsFiltersSlice.reducer