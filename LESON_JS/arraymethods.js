//Array Methods - help you to work with arrays
// -toString() - convert an array to a string of (comma separated)
// -join() - also join all arrays elements into a string ក៏ភ្ជាប់ធាតុអារេទាំងអស់ទៅក្នុងខ្សែអក្សរ
//Ex:
// const name = ["horng","huy","hong"];
// console.log(name);
// console.log(name.toString());
// console.log("join: " + name.join(" "));

//push() - add a new element to an array (at the end)
//pop() - remove the last element form an array
//unshift() - add a new element to an array (at the beginning)
//shift() - remove the first array element 

//Ex:
// const name = ["horng","huy","hong"];
// name.push("mey");
// console.log(name.join(" "));
// name.pop();

//Ex1
// const name = ["horng","huy","hong"];
// name.unshift("meng");
// console.log(name.join(" "));
// name.shift();

// Array methods - help you to work with Array
// splice() - can be used to add new item to an array//បញ្ចូលធាតុថ្មីចំកណ្តាល
// concat() - creates an new array by merging (concatenating) existing arrays
// Ex  splice
// let array = ["greenwood", "garnacho", "rashford"]
// console.log(array);
// array.splice(1, 0, "mata", "degea")
// console.log(array.join(" "));

// Ex1 concat
// let girl = ["nita", "lida", "bopha", "yaya"]
// let boy = ["pheak", "meng", "huy", "ang"]
// const full = boy.concat(girl);
// console.log(full.join(" "));

// Array methods - help you to work with Array
//reverse() -  reverse thr elements in an array //reverse = បញ្ចាស់
//sort() - sort an array alphabetically

//Ex1
// let name = ["nita", "lida", "bopha", "yaya"];
// let number = [10, 11, 12, 22, 33];

// let alphabet = ["a","b", "c"];

// console.log(name.reverse().join(" "));
// console.log(number.reverse().join(" "));
// console.log(alphabet.reverse().join(" "));

//Ex2
let name = ["nita", "lida", "bopha", "yaya"];
let number = [32, 11, 12, 22, 33, 100];

let alphabet = ["a","d", "c"];

console.log(name.sort().join(" "));
console.log(alphabet.sort().join(" "));
console.log(number.sort(function(a,b){
    return a-b;
}).join(" "));