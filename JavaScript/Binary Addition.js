// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)




function addBinary(a,b) {
    let binary = a + b;
    binary = binary.toString(2)
    return binary;
  }
  //   let binary = (a + b).toString(2);




/*
Other solutions

function addBinary(a,b){
    return (a+b).toString(2)
  }


  const addBinary = (a, b) => (a + b).toString(2);



  function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }


  function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
  }
  
  function addBinary(a,b) {
    return decimalToBinary(a+b);
  }



  function addBinary(a,b){
    return Number(a + b).toString(2);
  }


  const addBinary = (a, b) => Math.trunc(a + b).toString(2)


  function addBinary(a,b){
    var sum = a + b, binary = '';
  
    while (sum > 0) {
      binary = (sum % 2) + binary;
      sum = Math.floor(sum / 2);
    }
    
    return binary;
  }


  function addBinary(a,b){
    var added = a + b;  
    var binary =  added.toString(2);
    return binary;
  }


  function addBinary(a,b){
    let c = a + b;
    return c.toString(2);
  }



  const addBinary = (...args) => args.reduce((a, b) => a + b).toString(2)
addBinary(1,2)
*/

