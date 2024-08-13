// array is the similar set of collection (similar set of collection) . In js if we want to store something like similar set of collection like register users and collection of similar data insted of making one by one register user we can make an array of it and use for our purpose 
// declaration of array (as you already know)
let ary = [1,2,3,4,5,6,7,8];
let registerUser = ["rahul" , "divyansh" , "shunakshi" , "aditi"] //collection of register user (array of ragister person)

// another method for declaration array 
let ary2 = new Array(1,2,3,4,5,6,7);

console.table({ary, registerUser , ary2});
// array also consider as an object example 
console.log(typeof registerUser); //it will retuen an object 

// just like string we also have methods and fucntion for array in js 
let ary3 = [1,2,3,4,5,6];
console.log(ary3.toString()); //convert array into string 

//add 7 at last of array 
ary3.push(7);
console.log(ary3);

//delete last element of array 
ary3.pop();
console.log(ary3);

//filter (we can filter the element of array with some condtion)
let newArray = ary3.filter(value =>{
    return value < 4 ;
})
console.log(newArray);

// There is two most important method slice and splice 
let newArray2 = ary3.slice(0,1); //index 1 didnt include return an new array 
console.log(newArray2);

console.log(ary3.splice(0,1)) //index 1 also will include and its work on refernce 
console.log(ary3); //1 will remove from it 