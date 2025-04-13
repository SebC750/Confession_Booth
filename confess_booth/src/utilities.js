export const convertToDate = (seconds, nanoseconds) => {
    const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1e6);
    const date = new Date(milliseconds);
    console.log(date.toLocaleString())
    return date.toLocaleString()
    }