// we can also use date in js (date are kind of complicated but here i try to expalin them in simple as possible)
let mydate = new Date();
console.log(mydate); //it will return something like this (2024-08-13T09:33:38.033Z) (depend on your current) 

// ik its not that much redabale at all but here are some method which can convert it into more readable form like this 
// console.log(mydate.toDateString());
// console.log(mydate.toString());
// console.log(mydate.toJSON());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

// data also consider as object in js for interviw purpose 
console.log(typeof mydate); //return object 

//we can also creat our own date like this 
console.log(new Date(2023 , 0 , 25).toDateString());

// important Note => in js month starting from 0 that why it will print jan (0 to 11)

// we can also creat time stamp with the help of dates like this 
let myTimeStamp = Date.now(); 
console.log(myTimeStamp); //after that you can comapre it with current date 

// date.now() usually return in mini second you can / 1000 for seconds like this

console.log(myTimeStamp / 1000); //return value in second 
// and for removing decimal value we can use floor fucntion from .math like this
console.log(Math.floor(myTimeStamp / 1000)); // return in second without decimal 

// we can also take sepratly like date day month time like this 
let myNewDate = new Date();
console.log(myNewDate.getDay); // like this 
console.log(myNewDate.getMonth + 1); //months starts from 0 in js 


//we can more specify dates like this 
console.log(myNewDate.toLocaleString("default", {  
    weekday :"long",
}))




