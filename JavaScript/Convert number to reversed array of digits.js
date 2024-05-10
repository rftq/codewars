
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
    const digits = [];
    const numberString = n.toString();
    for (let i = numberString.length - 1; i >= 0; i--) {
       const digit = parseInt(numberString[i]);
       digits.push(digit);
     }
    return digits;
  }




/*
  Other solutions

  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }


  function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }


  function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }


  function digitize(n) {
    return n.toString().split("").reverse().map(Number);
  }


  function digitize(n) {
    //code here
    let numArr = [];
    
    while(n > 0){
      numArr.push(n % 10);
      
      n = Math.floor(n/10);
    }
    
    return numArr;
  }


  const digitize = (x) => {
    x = `${x}`.split('').reverse();
    let a = []
    for(let i = 0; i < x.length; i++){
      a.push(+x[i])
    }
    return a
  }


  digitize = n => [...String(n)].map(Number).reverse() 


  function digitize(n) {
    return n.toString().split("").reverse().map(function(i){
      return parseInt(i);
    });
  }
  */