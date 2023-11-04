//array methods - help you to word wiht array

// for-each() - calls a function (a callback function) onec for each array element

//Ex1 for each

// const names = ["tola", "pisey", "khorng", "kra"];
// const people = [];
// names.forEach(function(name){
//     console.log(name);
// });

//Ex2 for each

// const names = ["tola", "pisey", "khorng", "kra"];
// const people = [];

// function showName(name){
//     console.log(name);
// }
// names.forEach(showName);

//for each - can not return function
//ex
//console.log(names.forEach(function(name){return name}));
//undefined fails

//Ex3 for each
const names = ["tola", "pisey", "khorng", "kra"];
const people = [
    {name:"tola", sex: "male", age:"23", position: "developer"},
    {name:"pisey", sex: "male", age:"23", position: "app"},
    {name:"khorng", sex: "male", age:"23", position: "frontend developer"},
    {name:"kra", sex: "male", age:"23", position: "designer"}
];

people.forEach(function(person){
    console.log(person);
});

//console.log(people); //ចេញជា​ទម្រង array