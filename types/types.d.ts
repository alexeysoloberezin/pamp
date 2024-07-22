declare module "*.json" {
    const value: { [key: string]: any };
    export default value;
}
declare interface Date {
    addMinutes(number: number): Date;
    addHours(number: number): Date;
    addDays(number: number): Date;
    addMonths(number: number): Date;
    addYears(number: number): Date;
    format(format: string): string;
    isSameDay(date: Date): boolean;
    parseISO(dateString: string): Date
}
declare interface String {
    format(format: string): string;
}

declare interface Array<T> {
    remove(index: number): void;
}
