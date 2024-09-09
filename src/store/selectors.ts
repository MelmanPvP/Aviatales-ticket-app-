import { RootState } from './store';

export const selectFilteredTickets = (state: RootState) => {
    const { tickets } = state.tickets;
    const selectedCompanies = state.company;
    const selectedTransfers = state.transferFilters;

    const isAnyCompanySelected = Object.values(selectedCompanies).some(value => value);
    const isAnyTransferSelected = Object.values(selectedTransfers).some(value => value);

    let filteredTickets = tickets;

    if (isAnyCompanySelected) {
        filteredTickets = filteredTickets.filter(ticket => selectedCompanies[ticket.company]);
    }

    if (isAnyTransferSelected) {
        // @ts-ignore
        filteredTickets = filteredTickets.filter(ticket => selectedTransfers[`transfer${ticket.connectionAmount}`]);
    }

    return filteredTickets;
};

