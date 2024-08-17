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

// what if we want to add two arrays for that we also have concat method 
let ary4 = [1,2,3,4,5];
let ary5 = [6,7,8,9,10];
let concatArray =  ary4.concat(ary5)
console.log(concatArray);

// There is also another method for mergin array (mostly this one use in the real life project) is called spred method syntax =>
{
    let ary1 = [1,2,3,4,5];
    let ary2 = [6,7,8,9,10];
    let mergeArray = [...ary1 , ...ary2];
    console.log(mergeArray);
}
// advantage using it that we can add so many array together concat() only allow us to merge two arrays 

// What if we deal this type of ([array[array[array]]]) like this type for this we use flat method syntax=>
{
    let ary = [1,2,3,[4,5,6],1,2,3,[1,23,45,[45,56,8,9]]]; //if we try to work with it kind of complex so for more readability and easy to work with we use flat method 
    let newFlatArray = ary.flat(Infinity); //here we need to givr the depth like 1 , 2 ,3 but we use a trick we use infinity means flat the whold array with any depth 
    console.log(newFlatArray);
}

// some more important methods (usually we recive data from website in string , for that we can use these some fucntion)

console.log(Array.isArray("name")); //return false becuase name is an string 
console.log(Array.from("name")); //return an converted array of name 
// console.log(Array.from({name : "rahul"})); //this will not work return an empty array (interview purpose)


// now imagine you have different varaiable and data you want to collect all of them in one array , it is possible with array.of() like this 

{
    let score1 = 100;
    let score2 = 200;
    let score3 = 300;

    console.log(Array.of(score1,score2,score3));// return a array of all score variable
}
