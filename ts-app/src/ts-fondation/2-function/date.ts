import moment from "moment";

/**
 * @param {string} dateString
 * @returns {string}
 * @example
 * toShortReadableDate("2009-06-15T13:45:30.0000000");
 * -> "Today"
 * -> "Yesterday"
 * -> "Jun 15, 2009"
 */
export function toShortReadableDate(dateString: string) {
    if (isToday(dateString)) {
        return "Today";
    }

    if (isYesterday(dateString)) {
        return "Yesterday";
    }

    return moment(dateString).format("MMM D, YYYY");
}

/**
 * @param {string} dateString
 * @returns {string}
 * @example
 * toShortReadableDate("2009-06-15T13:45:30.0000000");
 * -> "Today"
 * -> "Yesterday"
 * -> "on Jun 15, 2009"
 */
export function toOnShortReadableDate(dateString: string) {
    if (isToday(dateString)) {
        return "Today";
    }

    if (isYesterday(dateString)) {
        return "Yesterday";
    }

    return `on ${toShortReadableDate(dateString)}`;
}

/**
 * @param {string} dateString
 * @returns {string}
 * @example
 * toShortReadableDateAndTime("2009-06-15T13:45:30.0000000");
 * -> "Jun 15, 2009 at 1:45 PM"
 * -> "Today at 1:45 PM"
 * -> "Yesterday at 1:45 PM"
 */
export function toShortReadableDateAndTime(dateString: string) {
    return `${toShortReadableDate(dateString)} at ${toShortTime(dateString)}`;
}

/**
 * @param {string} dateString
 * @returns {string}
 * @example
 * toShortTime("2009-06-15T13:45:30.0000000");
 * -> "1:45 PM"
 */
export function toShortTime(dateString: string) {
    return moment(dateString).format("h:mm A");
}

/**
 *
 * @param {string} dateString
 * @return {bool}
 * @example
 * isToday("2009-06-15T13:45:30.0000000");
 * -> $true
 */
export function isToday(dateString: string) {
    const today = moment();
    const date = moment(dateString);

    return today.isSame(date, "date");
}

/**
 *
 * @param {string} dateString
 * @return {bool}
 * @example
 * isYesterday("2018-12-17T13:45:30.0000000");
 * -> $true
 */
export function isYesterday(dateString: string) {
    const yesterday = moment().subtract(1, "day");
    const date = moment(dateString);

    return yesterday.isSame(date, "date");
}

export function getTimeZoneMinutesOffset() {
    // The javascript function returns the difference between UTC and the local timezone. (e.g. -5:00 is actually +300)
    // In order to facilitate the handling on the server, switch it so that it matches actual timezones.
    return new Date().getTimezoneOffset() * -1;
}
