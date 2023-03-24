import tourismData from "./tourismData";

export function getDatas() {
    return tourismData
    console.log(tourismData)
}

export function getData(number) {
    const listItems = tourismData.records.find((val) =>
        val.면적 == number
    );
    return listItems
}