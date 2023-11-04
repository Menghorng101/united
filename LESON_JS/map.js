//onclick = alert("hello world");
//array method - halp you to work with array
//map()
//create a new array by performing a function on each array element
//-dose not  executed the function for array elements without values
//-dose not change original array
//-dose return a new array

//Ex1 map

const names = ["bopha", "thida", "mara", "genda"];

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const people = [
    {name:"tola", sex: "male", position: "developer"},
    {name:"pisey", sex: "male", position: "app"},
    {name:"khorng", sex: "male", position: "frontend developer"},
    {name:"kra", sex: "male", position: "designer"}
];

//names

names.map(function(name){
    console.log(name);
});
 
const newName = names.map(function(name){
    console.log(name + " kok ");
});

//number

const newNumber = number.map(function(number){
    return number * 2;
});

console.log(newNumber);

//people

const newPeople = people.map(function(person){
    //return object
    return{
        name: person.name + "horng",
        sex: person.sex.toUpperCase(),
        position: person.position.toUpperCase()
    }
});
console.log(newPeople);

console.log(people);