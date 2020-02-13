import moment from "moment";

interface Options {
    formatter: (date: moment.Moment) => string;
    color: string;
}

export function printDate(dates: string[], options: Options) {
    // Typescript sait le type de date pas besoins de le définir.
    const updatedDates = dates.map(date => {
        const parsedDate = moment(date);

        return options.formatter(parsedDate.add(1, "day"));
    });

    // Typescript sait le type de element pas besoins de le définir.
    updatedDates.forEach(element => {
        console.log(element, `color: ${options.color}`);
    });
}

const prettyFormatter = (date: moment.Moment) => {
    return date.format("MMM D, YYYY");
};

const dates = ["1995-12-25", "2010-12-25", "2012-12-25"];

printDate(dates, { formatter: prettyFormatter, color: "red" });
