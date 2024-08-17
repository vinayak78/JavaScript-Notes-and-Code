// singleton
// object.create

// object literal
// usually in backgound key treat like a string so if i declare a key like a string 

// now add symbol in object there is also a syntax for that like this 
const mysym = Symbol("mykey1");
const jsUser = {
    name : "Rahul",
    age : 17,
    location : "delhi",
    email : "user@google.com",
    isLogin : true,
    "second Name" : "adi",
    [mysym] : "mykey", //--> symbol
 };

console.log(jsUser.age);
// console.log(jsUser.second Name);i canot able to acces there is also another way for it 
console.log(jsUser["second Name"]); //we can able to acces it like this 
console.log(jsUser[mysym]); //-->for symbol

// if you want to change the object data you can do it like this 
jsUser.email = "adii@google.com";

// but what if we dont want to any one to change any data in our object so we can frezz it like this 
// Object.freeze(jsUser);
// now no one can able to change anything in our object 

// *************************function in objects ************

// now lets talk about fucntion in object we can add fuction object or refer its keys syntax =>

    // adding an function in object
     jsUser.helloFuction = function(){
        console.log("Hello user");
     }
     // refering key of object in fucntion 
     jsUser.helloFuction2 = function(){
        console.log(`hello user , ${this.name}`); //this mean we are refering jsuser.name 
    }
    
    console.log(jsUser.helloFuction());
    console.log(jsUser.helloFuction2());


// singleton way to declare a object 
const userData2 = new Object(); //singleton

// object inside object
const regularUser = {
    email : "user@gmail.com",
    userName : {
        useFullname : {
            firstName : "user",
            lastName : "data",
        }
    }
}
// console.clear();
console.log(regularUser.userName.useFullname.firstName);

// mergin two array

// 1 .method 
// we have assign method for object 
{
    const myobj1 = {1 : "a",2 : "b"};
    const myobj2 = {3 : "c",4 : "d"};
    const combinedObj = Object.assign({} , myobj1 , myobj2);
      console.log(combinedObj);
      
}

// 2. 
{
    const myobj1 = {1 : "a",2 : "b"};
    const myobj2 = {3 : "c",4 : "d"};
    const combinedObj = {...myobj1,...myobj2}
      console.log(combinedObj);
      
}

//object inside array 
{
    const user = [
        {
            id : 1,
            email : "1@gmail.com",
        },
        {
            id : 2,
            email : "2@gmail.com",
        },
        {
            id : 3,
            email : "3@gmail.com",
        },

    ]
    console.log(user[1].id);
}



// converting object keys into an array 
console.log(Object.keys(jsUser));
//converting object values into array 
console.log(Object.values(jsUser)); 
//converting object data into enteries 
console.log(Object.entries(jsUser));

//checking (checking object have email property or not)
console.log(jsUser.hasOwnProperty("email"));

