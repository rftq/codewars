// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



function findAverage(array) {
    let sum = 0;
    for (i = 0; i<array.length; i++) {
      sum += array[i];
    }
    result = sum / array.length;
    if (array < 1) {
      result = 0;
    }
    return result;
  }



/*
  Other solutions
  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }


  function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }


  function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}


const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;


function find_average(array) {
    return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
  }


  function find_average(array) {
    // your code here
    return array.length ? array.reduce((a,c )=> a + c,0) / array.length : 0
  }
*/