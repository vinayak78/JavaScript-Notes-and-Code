// sometime conversion kind of messy and confusing at start but try to undersatnt it becauz its really important
// COnverting string into number (we can also convert number into string with String() fucntion) 
{
    let score = "55";
   let convertedScore = Number(score);
   console.log(convertedScore);
   console.log(typeof(convertedScore));

}
// what if we change the value of score like this 
{
    let score = "55ns";
    let convertedScore = Number(score);
    //it will return NaN (not a number(but Nan also cosider as an number that why its data type is nunber))
    console.log(convertedScore);
    console.log(typeof(convertedScore));
}
//what if we try to convert a name into number like this 
{
    let score = "fifty five";
    let convertedScore = Number(score);
    //it will also return NaN
    console.log(convertedScore);
    console.log(typeof(convertedScore));
}
//what if we add boolean in score like this 
{
    let score = true;
    let convertedScore = Number(score);
    // it will return 1(1 => true / 0 => false)
    console.log(convertedScore);
    console.log(typeof(convertedScore));
}
{
    let score = false;
    let convertedScore = Number(score);
    //it will return 0 
    console.log(convertedScore);
    console.log(typeof(convertedScore));
}
//what if we convert a name into boolean like this 
{
    let name = "vinayak";
    let convertedName = Boolean(name);
    // it will return true
    console.log(convertedName);
    console.log(typeof(convertedName));
}
{
    let name = "";
    let convertedName = Boolean(name);
    // it will return false
    console.log(convertedName);
    console.log(typeof(convertedName));
}
//boolean return false 0 when there is ntg and return true 1 whene there is a name or a string 

//These conversion look confusing at first but when you use them in daily codes and program you will automatically learn them 