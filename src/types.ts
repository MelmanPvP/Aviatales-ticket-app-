

export interface TicketInfo {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    startTime: string;
    endTime: string;
    duration: string;
    connectionAmount: number | null;
}
export type info = TicketInfo[];