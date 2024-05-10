// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

// Examples
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]
// Note
// start < stop
// step > 0



function generateRange(min, max, step){
    array = [];
    for (let i = min; i <= max; i += step){
      array.push(i);
      }
    return array;
  }





/*
Other solutions
function generateRange(min, max, step){
var arr = [];
while (min <= max) {
    arr.push(min);
    min += step;
}
return arr
}


function generateRange(min, max, step) {
    for (var res = []; min <= max; min += step) res.push(min)
    return res
  }


function generateRange(min, max, step){
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
  }


  function generateRange(min, max, step) {
    return [...rangeGenerator(min, max, step)];
  }
  
  function* rangeGenerator(min, max, step) {
    while (min <= max) {
      yield min;
      min += step;
    }
  }


function generateRange(min, max, step){
    return Array.from({length:1+(max-min)/step}, (_, i) => min + i*step);
  }


function generateRange(min, max, step){
    var array = [];
    for (var i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}
*/