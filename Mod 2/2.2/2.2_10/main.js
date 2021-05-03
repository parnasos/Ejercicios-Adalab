const numberYears = document.querySelector('.ages');
const numberDays = 365;
const numberHours = 24;
const totalHours = parseInt(numberYears.innerHTML)*numberDays*numberHours;
console.log(`Has vivido ${totalHours} horas a lo largo de tu vida`);
