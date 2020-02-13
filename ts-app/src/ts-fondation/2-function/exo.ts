import moment from "moment";

export function printDate(dates, options) {
    const updatedDates = dates.map(date => {
        const parsedDate = moment(date);

        return options.formatter(parsedDate);
    });

    updatedDates.forEach(element => {
        console.log(element, `color: ${options.color}`);
    });
}

const prettyFormatter = date => {
    return date.format("MMM D, YYYY");
};

const dates = ["1995-12-25", "2010-12-25", "2012-12-25"];

printDate(dates, { formatter: prettyFormatter, color: "red" });
