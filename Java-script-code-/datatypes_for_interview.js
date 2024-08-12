// In this i will explain data type in depth for interview questions
// As we alredy know  
/* we have two types of data types in js 
1> primited data types => boolean , number , string , null ,undefine , symbool , infinity  , bigint etc
2> Non - prinited data types => objects and array(array also consider as an object) */

/* what the difference between in these two types  => that one is store in stack memory and other in heep 
the primited data types store in stack memeory and on the other side we have non - primited data types whic store in heep storage 
*/

/*in primited data types you will recive a copy of a value and the non - primited type you will receive refrece of it */

// declaration of varaiables
let age = 15; //number
let name = "vinayak"; //string
let futurePlane; //undefine 
let websiteLogin = true; //boolean
let personalInfo = null; //null
let longint = 1564316461654n;//big int 
let special = Symbol("123");//symbol

// Non - primited data types 
const customer = {
    firstName : "Rahul",
    lastName : "kumar",
    age : "18",
    customerId : 22578,
};

let ary1 = [1,2,3,4]; //number array
let ary2 = ["vinayak" , "rahul" , "harshit"]; //we can also add string like this is array
let ary3 = [null , undefined , "hello" , "$"]; // we can also null and undefine and special character in array

// imprtant note array and null both are consider as an object like
console.log(typeof ary1); //return object 
let ntg = null;
console.log(typeof ntg); //return object 


// comment it before using it 
console.clear();


// ****************************************************************************


// Memory in js as i alredy explain the two types of memory in js static and heep let me explain you with example 
let userName1 = "harshit";
let userName2 = userName1;
userName2 = "rahul"; // user name will change becuz it assign to username2 as its value right? but
console.log(userName1); // it will print harshit 
console.log(userName2); // it will print rahul

// here is the explanation why its happens so when i assign the value of username2 to useranme1 it have a copy of username1 not its original value because its an primited data type they pass a copy of there original value not real one thats why when i change the value of username2 its didnt affect the value of username1

// lets talk about the heep storage it use rference for non-primited types of datatypes example
const myObj1 = {
    name : "vinayak",
    email : "vinayak@googal.com",
};

const myObj2 = myObj1;

myObj2.email = "rahul@google.com";

console.log(myObj1);
console.log(myObj2);

// you will notice that myobj1 also change the value of its email but i only change the value of myobj2 it happed becuz of refrenc myobj1 and myobj2 have same rfrence they both store there data in the heep storage they why it changed 