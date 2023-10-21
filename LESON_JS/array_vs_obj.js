//array - stor multiple values in a single variable 
//[], 0 index based 

const friends = [
    1, 
    "kok", 
    "male", 
    28, 
    false,
    true,
    ["ll", "ee", "ww"],
    function greeting(){
        console.log("hello");
    },
];
// access value
// console.log(friends[6][1]);
// friends[7]();

//objects - key/value pairs methods
//{}
//dot notation

const person = {
    id : 11, name : "John", age :19, gender : "male", 
    enducation : false, marride : true, 
    sibiling : ["dd", "www", "qqq"],
    greeting : function(){
        console.log("hello");
    }
}
//access value
console.log(person.sibiling[0]);