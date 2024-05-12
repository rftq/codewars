// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.




function invert(array) {
    for (i=0; i<array.length; i++)
      if (i < 0) {
        array[i] = +array[i];
      } else {array[i] = -array[i]}
     return array;
  }




/*
  Other solutions


  const invert = array => array.map(num => -num);


  function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }


  function invert(array) {
    return array.map(i => 0 - i);
 }


 function invert(array) {
    return array.map(x => -x);
 }


 function invert(array) {
    return array.map(n => n && -n)
 }


 invert = a => a.map(n => 0-n)


 function invert(array) {
  return array.map(a => -a);
}


function invert(array) {
   return array.map(item => parseInt(-item));
}


const invert = function(array) {
   return array.map(item => -item)
}
*/