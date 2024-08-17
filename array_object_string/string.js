// In js for storing charcter base data like username and email we use string like this 
let userName = "Garv";
let userEmail = "garv@google.com";

// we can also assign value like this to
let userName2 = new String ("Rahul");
let userEmail2 = new String ("rahul@gmail.com");

// In modern js we use template literals for assignment value like this  
let userAge = 17;
let userInfo = `The name of user is ${userName} and age => ${userAge}`
console.log(userInfo);

console.table([userName,userEmail]);
console.table([userName2,userEmail2]);

// in js we have some mehtod and function which we use to perform some specific task with our string like 
let personeName = "laxmi";
console.log(personeName.toUpperCase());//convert the string into upper case 
// console.log(toUpperCase(personeName)); this is also valid 
console.log(personeName.indexOf("x"))// print the index of x 
console.log(personeName.slice(0,4));// print laxm 0 to 3 not 4 
console.log(personeName.includes("laxmi")); //it will return true it use for checking 
console.log(personeName.trim()); //use for removing whitespace 
// trimStart() , trimEnd() also use 
console.log(personeName.replace("l" , "a"));// replace l to a 
// concat() method use for adding two string together
// toString() use for converting an array to string 
