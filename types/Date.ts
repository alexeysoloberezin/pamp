// import { parseISO, format } from "date-fns";
// import { ru } from "date-fns/locale";
// used in blog

Date.prototype.toJSON = function() {
    let originalHours = this.getHours();
    let hoursDiff = this.getHours() - this.getTimezoneOffset() / 60;
    this.setHours(hoursDiff);
    let timezoneString = this.toISOString();
    // set original hours so .toJSON does not change original value
    this.setHours(originalHours);

    return timezoneString;
};
// Date.prototype.format = function(formatTokens: string): string {
//     return format(this, formatTokens, { locale: ru });
// };
// in case if ISO strings came from server
// String.prototype.format = function(formatTokens: string): string {
    // return format(parseISO(this as string), formatTokens, { locale: ru });
// };
Date.prototype.addMinutes = function(minutes: number): Date {
    return new Date(this.setMinutes(this.getMinutes() + minutes));
};

Date.prototype.addHours = function(hours: number): Date {
    return new Date(this.setHours(this.getHours() + hours));
};

Date.prototype.addDays = function(days: number): Date {
    return new Date(this.setDate(this.getDate() + days));
};

Date.prototype.addMonths = function(month: number): Date {
    return new Date(this.setMonth(this.getMonth() + month));
};

Date.prototype.addYears = function(years: number): Date {
    return new Date(this.setFullYear(this.getFullYear() + years));
};
Date.prototype.isSameDay = function(date: Date): boolean {
    if (this.getFullYear() == date.getFullYear() && this.getMonth() == date.getMonth() && this.getDate() == date.getDate()) {
        return true;
    } else return false;
};

Date.prototype.parseISO = function(dateString: string): Date {
    let dp: string[] = dateString.split("-"); // YYYY-MM-DD
    let date = new Date();
    date.setFullYear(+dp[0], +dp[1] - 1, +dp[2]);
    date.setHours(12, 0, 0, 0); // just in case
    return date;
}

//array
Array.prototype.remove = function(index: number): void {
    this.splice(index, 1);
};
