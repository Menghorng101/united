//onclick = alert("Click");
//data () - create wiht the new data constructor

const months = [
    "january", "february", "march", "april", "may","june", "july", "august", "september", "october", "november", "december"
];

const days = [
    "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

// const date = new Date(2023, 10, 5); //Date() - constructor
// console.log(date);

// // set () - output
// date.setDate(4);
// console.log(date);

// date.setFullYear(2000);
// console.log(date);

//get () - output
const date = new Date();

const day = date.getDay();

console.log(days[day]);

console.log(date);