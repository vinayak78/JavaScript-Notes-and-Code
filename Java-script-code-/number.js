// just like number we also have fuction and mehod for number to some of the important mehtod are like this 

//but if we want at set the data type by ower self so we can use new like this 
let anotherNumber = new Number(569);
// console.log(anotherNumber);

let number = 54; //usually in this case js autoamtically set the variable data type to number 
// console.log(number.toString()); //return the number convert into string
let balance = 522.4556;
console.log(balance.toPrecision(2));
console.log(balance.toFixed(2));//return 2 digit after decimal 

let hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //convert the digit into indian number and return a string of it (en-IN for indian digit number by default it have internation digit )

// There are many more method with number like .max and .min any many more you can check them on mdn 


// *****************************MATHS in JS *****************************************

// we also have some fucntion and method for math in js some of them are 
console.log(Math.PI);//print the value of pi 
console.log(Math.abs(-4)); //return poitive value onky work with negative values 
console.log(Math.round(45.69)); //return an round of value 
console.log(Math.ceil(45.69));// return an round of value by chosing upper value 
console.log(Math.floor(45.69)); //return an round of value by chosing lower value

// one of most useed and most important one mehod is random which we use to generat random number you can use it to generate number otp and many more stuff you can perform with it 
console.log(Math.random()); //by default it print random number between 0 to 1 
console.log(Math.random() * 10 + 1); // not it will print number between 10 to 0 but we dont want 0 in our value that why we use + 1 for it you can check it by dry run 

// what if we want to genrate number between min and max value there is formula or more less you can say its simple trick with basic math try to focus on it 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max -  min + 1)) + min); //not it will genrate number between 10 to 20 , you can dry run it for better understanding 

// small practice for genrating otp
{
    const minRange = 1000;
const maxRange = 9999;
let otp = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
console.log(`4 digit otp => ${otp}`);
}

//This one for 6 digit otps 
{
    const minRange = 10000;
const maxRange = 99999;
let otp = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
console.log(`6 digit otp => ${otp}` );
}
