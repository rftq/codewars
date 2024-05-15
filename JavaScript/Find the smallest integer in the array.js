// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.



class SmallestIntegerFinder {
    findSmallestInt(args) {
      let minimum = args[0];
      for (let i=0; i < args.length; i++){
        if (args[i] < minimum){
          minimum = args[i];
          }
      }
      return minimum;
    }
  }


/*
Other solutions
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
      return a - b; } )
      return args[0];
    }
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce(function(prev, curr, index, array) {
        return prev < curr ? prev : curr;
      });
    }
  }
*/

