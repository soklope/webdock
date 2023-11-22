// dateUtils.js

const formatCustomDate = (inputDate) => {
    const formattedDate = inputDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });

    const [month, day, year] = formattedDate.split('/');
    const customFormat = `${month}/${day} - ${year}`;

    return customFormat;
};

export default formatCustomDate;
