//onclick = alert("Click");

//reduce ()

//Ex1

const animal = [
    {id:1, name: "bobo", age:3, sex:"male", position:"vos vos", salary: 6500},
    {id:2, name: "tino", age:1, sex:"male", position:"vos vos", salary: 300},
    {id:3, name: "jupi", age:2, sex:"male", position:"vos vos", salary: 600},
    {id:4, name: "toto", age:4, sex:"male", position:"vos vos", salary: 500},
    {id:5, name: "olo", age:3, sex:"male", position:"vos vos", salary: 600},
];

const dogsalary = animal.reduce(function(total,animalsalary) {
    return total += animalsalary.salary
},0);
console.log(dogsalary);