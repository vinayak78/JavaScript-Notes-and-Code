// as i told you we can merge two object like this
{
  const myobj1 = { 1: "a", 2: "b" };
  const myobj2 = { 3: "c", 4: "d" };
  const combinedObj = Object.assign({}, myobj1, myobj2);
//   console.log(combinedObj);
}

// but what we have same key name in both object they will overwrite each other,so we use this method for this case
{
  const myobj1 = { 1: "a", 2: "b" };
  const myobj2 = { 1: "c", 2: "d" };
  const combinedObj = {
    1: [myobj1[1], myobj1[2]],
    2: [myobj2[1], myobj2[2]],
  };
//   console.log(combinedObj);
}

// what if the more key in second object array method is not will work we use this method
{
  const myobj1 = { 1: "a", 2: "b" };
  const myobj2 = { 3: "c", 4: "d", 5: "e", 6: "f" };
  const totalKey = [...Object.keys(myobj1) , ...Object.keys(myobj2)];
  const mergeObject = {};
  for(let key in totalKey){
    const numKey = parseInt(totalKey[key] , 10);
    mergeObject[numKey] = myobj1[numKey] || myobj2[numKey] || null;
  }
  console.log(mergeObject);
}
