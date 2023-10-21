const greeting = "Hello khong, I miss you.";
console.log(greeting);
console.log(greeting.length);//រាប់ចំនួនតួអក្សរមានប៉ិន្មានតួអក្សរ
console.log(greeting.toUpperCase());//toUpperCase ត្រូវមាន() ព្រោះវាជា Methods or Functions
console.log(greeting.toLocaleLowerCase());//toLowerCase ត្រូវមាន() ព្រោះវាជា Methods or Functions

//Ex: -concat() joins two or more string //​ ត string
// const firstName = "Pogba";
// const lastName = "Kane";
// const myName = "Khorng";
//how to call

//step 1
//const fullName = firstName + " " + lastName ;ត​ string
//console.log(fullName); // call or output

//step 2
// const fullName = firstName.concat (" ",lastName," ",myName);
// console.log(fullName);

//Ex: -trim() removes whitrspaces from both sides of a string

// const chat = "      Hello khong, I miss you.";
// console.log(chat);
//console.log(chat.trim());//កាត់ space ចេញ

//Ex: IndexOf(), lastIndexOf, shearch();

// const text = "Hello Guy, I miss you. Guy";
// console.log(text);
// console.log(text.indexOf("Guy"));
// console.log(text.lastIndexOf("Guy"));

//+String methods - help you to work with string 
// -slice() - extracts a part of  a string  and returns the extracted part in a new string

//Ex:
const txt = "Hello tola, I miss you tola";
console.log(txt);//output
//output for number (index)
console.log(txt.lastIndexOf("tola"));
//cut string use slice(start, end)
console.log(txt.slice(6,10));
//រៀបពីក្រោយមកវិញ
console.log(txt.slice(-8,-5));

// -Substr() -simillar to slice(), difference is that the second parameter specifies the length of th extractions part

//Ex: 
 const hi = "hello world, I hate you";
 console.log(hi.substring(6));

 // -replace() -replace a specific vlaue with another vlaue in a string

//Ex: 
const hello = "hello world, I hate you";
console.log(hello.replace("hate","love"));

