import moment from "moment";
export const convertToInternationalCurrencySystem = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3
                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
                : Math.abs(Number(labelValue));
}

export const getTimeDifference = (inputDate) => {
    const current_time = moment(); // current time
    const other_time = moment(inputDate); // other time

    const duration = moment.duration(current_time.diff(other_time)); // time difference as duration

    const day_diff = duration.asDays(); // time difference in days
    const month_diff = duration.asMonths(); // time difference in months
    const year_diff = duration.asYears(); // time difference in years

    const day_difference = Math.round(day_diff);
    const month_difference = Math.round(month_diff);
    const year_difference = Math.round(year_diff);

    if (year_difference > 0) {
        return `${year_difference} ${year_difference > 1 ? "years" : "year"} ago`
    }
    else if (month_difference > 0) {
        return `${month_difference} ${month_difference > 1 ? "months" : "month"} ago`
    }
    else if (day_difference > 0) {
        return `${day_difference} ${day_difference > 1 ? "days" : "day"} ago`
    } else {
        return `1 day ago`
    }
}

export const formattedDate = (dateTime) => {
    const date = new Date(dateTime);

    // subtract one day from the date
    date.setDate(date.getDate() - 1);

    // format the date string into "MMM DD, YYYY" format
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    return formattedDate;
}