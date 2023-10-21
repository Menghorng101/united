//Array used to store multiple values in a single variable..
// use [], 0 index bosed

//declare
const friends = ["tola", "bopha", "thida", 12];
//invoke
console.log(friends[1]);
//chang value
friends[3] = "yaya"
console.log(friends[3]);

//lenght value គឺរាប់ចំនួនលេខ
console.log(friends.length);

//toString()  -> convert an array to a string
console.log(friends.toString());
console.log("ToString:" + friends.toString());

//join() -> also join all arrays elements into a string
//join() -> អាចកំណត់ space បាន
console.log(friends.join());
console.log("Join:" + friends.join(" "));
