//onclick = alert("Click");
//every() - check if all array values pass and test

//Ex1

const grades = ['A', 'B', 'C', 'D', 'E', 'F'];
const googgrade = ['A', 'B', 'C', 'E'];

const newgrade = grades.every(function(grades){
    return grades !== 'F';
});
console.log(newgrade);