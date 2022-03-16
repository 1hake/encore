export const convertDateToFrenchString = (date) => {
    const months = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ];
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = months[dateObject.getMonth()];
    const year = dateObject.getFullYear();
    return `${day} ${month} ${year}`;
}


export const sliceNRandomElementsArray = (array, n) => {
    const filteredArray = array.filter(element => element.fields.attachments && element.fields.attachments.length > 0);
    const shuffled = filteredArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}