// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here





function century(year) {
    let result = year / 100;
    if (result % 1 > 0) {
      result = Math.floor(result) + 1;
    }
    return result;
  }




/*
  Other solutions
  const century = year => Math.ceil(year/100)


  function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }


  function century(year) {
    return (year + 99) / 100 | 0;
  }


  function century(year) {
    return Math.ceil(year / 100);
  }


  const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;


  function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }
*/