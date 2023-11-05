// some()- check if some array value pass a test 

//ex1
const grades = ['A', 'B', 'C', 'D', 'E', 'F'];
const googgrade = ['A', 'B', 'C', 'E'];

const newgrades = grades.some(function(grade) {
    return grade !== 'F';
});

console.log(newgrades);