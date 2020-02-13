import moment from "moment";

// What to do if we want to enforce the color to red or green

const LOG_TYPE = {
    alert: "red",
    success: "green"
} as const;

type Keys = keyof typeof LOG_TYPE;
// type ColorValues = typeof LOG_TYPE["alert"];
type ColorValues = typeof LOG_TYPE[Keys];

interface Options {
    formatter: (date: moment.Moment) => string;
    color: ColorValues;
}

export function printDate(dates: string[], options: Options) {
    if (options.color === "yellow") {
        console.log("ERROR!");
    }

    const updatedDates = dates.map(date => {
        const parsedDate = moment(date);

        return options.formatter(parsedDate.add(1, "day"));
    });

    updatedDates.forEach(element => {
        console.log(element, `color: ${options.color}`);
    });
}

const prettyFormatter = (date: moment.Moment) => {
    return date.format("MMM D, YYYY");
};

const dates = ["1995-12-25", "2010-12-25", "2012-12-25"];

printDate(dates, { formatter: prettyFormatter, color: "red" });
