import moment from "moment";

export const columns = Array.from(Array(12)).map((el, index) => {
    return moment(new Date(21, index, 1)).format("MMM YY");
})
