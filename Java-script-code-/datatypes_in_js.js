/* we have two types of data types in js 
1> primited data types => boolean , number , string , null ,undefine , symbool , infinity etc
2> Non - prinited data types => objects and array(array also consider as an object) */
let age = 15; //number
let name = "vinayak"; //string
let futurePlane; //undefine 
let websiteLogin = true; //boolean
let personalInfo = null; //null
// note for now you should focus on these 5 data types symbol and infinity is use in advance like in react .
// we can use typeof for getting variable data type like this 
console.table([typeof age,name,futurePlane,websiteLogin,personalInfo]); //it will print the data types of all varaible

// declaration of object 
const customer = {
    firstName : "Rahul",
    lastName : "kumar",
    age : "18",
    customerId : 22578,
};
// this is an object and its conatain keyname and there values keyname are first name and last name and there values are the values of keyname 
console.log(typeof customer);
console.log(customer);
console.log(customer.age); //we can also able target sepratly keyname like this 

//arrays 
let ary1 = [1,2,3,4]; //number array
let ary2 = ["vinayak" , "rahul" , "harshit"]; //we can also add string like this is array
let ary3 = [null , undefined , "hello" , "$"]; // we can also null and undefine and special character in array

console.log(ary1);
// every elements have its own index which start from 0 .
console.log(ary1[1]); // it will print 2 
console.log(typeof ary1); //array also consider as an object 
