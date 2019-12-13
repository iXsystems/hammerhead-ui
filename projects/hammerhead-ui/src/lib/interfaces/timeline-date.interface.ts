export interface TimelineDate<T = any> {
    date: Date;
    data?: T;
    displayFormatter?: (date: Date, data?: T) => string;
}
