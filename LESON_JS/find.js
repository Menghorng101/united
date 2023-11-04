//find()
//-return the value of the first array element that passes a test function
//- return single instance - in this case ogject
//onclick = alert("Click");

//Ex1

// const people = [
//     {name:"tola", sex: "male", age:"22", position: "developer"},
//     {name:"pisey", sex: "male", age:"12" , position: "app"},
//     {name:"khorng", sex: "male", age:"19",  position: "frontend developer"},
//     {name:"kra", sex: "male", age:"25", position: "designer"}
// ];

// const newPeople = people.find(function(person){
//     return person.age <= 25;
// });
// console.log(newPeople);

//findindex 
//findindex () - return the index first element in array that pass a test
 
//Ex1
const people = [
    {id:1, name:"tola", sex: "male", age:"22", position: "developer"},
    {id:2, name:"pisey", sex: "male", age:"12" , position: "app"},
    {id:3, name:"khorng", sex: "male", age:"19",  position: "frontend developer"},
    {id:4, name:"kra", sex: "male", age:"25", position: "designer"}
];

const newPeople = people.findIndex(function(person){
    return person.id === 3;
});
console.log(newPeople);