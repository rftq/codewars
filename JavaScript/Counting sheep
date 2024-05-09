/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/


function countSheeps(sheep) {
  let count = 0;
for (let i = 0; i < sheep.length; i++) {
  if (sheep[i] == true) 
    count ++;
}
  return count;
}




/*
Other solutions

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }


  function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }


  let countSheeps = x => x.filter( s => s ).length;


  function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }


  const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;


  function countSheeps(arrayOfSheep) {
    var num = 0;
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {
        num += 1;
      }
    }
    return num;
  }


  function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
  }


  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce(function(result, current) {
        if (current) result++;
        return result;
    }, 0);
  }


  function countSheeps(arrayOfSheep) {
    var count = 0;
  arrayOfSheep.map(function(current){
    if(current){
      count += 1;
  }
  });
  return count;
  }


  const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;


  function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count)
    return count
  }

  */