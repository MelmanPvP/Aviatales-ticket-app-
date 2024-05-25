export interface TicketTime {
    startTime: string;
    endTime: string;
}

export interface TicketInfo {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: TicketTime;
    duration: string;
    connectionAmount: number | null;
}
export type info = TicketInfo[];