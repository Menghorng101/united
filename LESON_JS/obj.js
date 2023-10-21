//object - key/value pairs method
//dot notation

const person = {
    id : 1, 
    name : "kok",
    gender : "male",
    sibling : ["nita", "susa", "kiki"],
    greeting : function(name){
        console.log("my name's " + name);
    },
}
//invoke all
console.log(person);

//invoke 1
// console.log(person.name);

//invoke wint fonction (name)
// person.greeting("nita");

//chang value
// person.id = 222;
// console.log(person.id);