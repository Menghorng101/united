// Number Methods = help you work with number

// toString() - return a number as a string
//toEponential() - return a string, with a number rounded and written using exponential notation
//toFixed() - return a string with a number written with a specified length
//toPrecision() - return a String, with a number written with a specified length
//valueOf() - return a number as a number
//all javascript data type have a  valueof() and a toString() method

//Ex
// const x = 100;
// console.log(x.toString());//string color black
// console.log(x);// number color blue

// const y = 5.587;
// console.log(y.toExponential(1));// dak number kroy exponential (1) kur der 3 jg ban munber kruy , pon man 

// const z = 50.576;
// console.log(z.toFixed(2)); //dak number kroy toFixed(2) kur der 3 jg ban munber kruy , pon man
// End Ex 

// Number Methods = help you work with number
//number() - can be used to convert javascript variable to number
//parseInt() - parses a sting  and return a whole number, space are allowed, only the first number is returned
//parseFloat() - parses a string and return  a number, space are allowed, only the first number is returned

//NaN -Not a Number 
console.log(Number("100 111 "));

//ParseInt()
const x = 100.44 , y = "13.44" , z = "600";
console.log(x);
console.log(parseInt(z)); //parseInt() converts Integer to Number

//parseFloat()
const a = 100.44 , b = "13.44" , c = "600";
console.log(a);
console.log(parseFloat(c));