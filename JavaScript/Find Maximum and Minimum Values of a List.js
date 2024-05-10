// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

var min = function(list){
    minimum = list[0];
    for (i=0; i < list.length; i++){
      if (minimum > list[i])
        minimum = list[i];
      console.log(minimum);
    }
  return minimum;
}

var max = function(list){
    maximum = list[0];
    for (i=0; i < list.length; i++){
      if (maximum < list[i])
        maximum = list[i];
      console.log(maximum);
    }
  return maximum;
}



/*
Other solutions

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}


var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}


var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}


var min = function(list){
    var min =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur<min) min=cur;
    }
    return min;
}

var max = function(list){
    var max =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur>max) max=cur;
    }
    return max;
}


//with ES6
var min = function(list){
    return Math.min(...list);
}
//without
var max = function(list){
    return Math.max.apply(null, list);
}


const min = list => list.sort((a, b) => a - b)[0];

const max = list => list.sort((a, b) => b - a)[0];


var min = list => Math.min(...list),
    max = list => Math.max(...list);


var min = function(list){
        let min = list[0];
        for (let i of list) {
          if (i < min) {
            min = i;
          }
        }
          return min;
      }
      
var max = function(list){
        let max = list[0];
        for (let i in list) {
          if (list[i] > max) {
            max = list[i];
          }
        } 
          return max;
      }


const min = $ => $.sort((a, b)=> a - b)[0]
const max = $ => $.sort((a, b)=> b - a)[0]


min = list => Math.min(...list)
max = list => Math.max(...list)


const min = list => list.reduce((a, b) => a < b ? a : b)

const max = list => list.reduce((a, b) => a > b ? a : b)
*/