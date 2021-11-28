const convertDate = (date) => {
    if (date) return date.split("-").reverse().join('-');
}

export default convertDate;