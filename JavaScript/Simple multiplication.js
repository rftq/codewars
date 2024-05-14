// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


function simpleMultiplication(number) {
    // your code........
  if (number % 2 == 0) {
    number *= 8;
  } else {
    number *= 9;
  }
  return number;
}





/*
Other solutions


function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}



function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }


  function simpleMultiplication(number){
    return (number % 2 == 0)? number * 8 : number * 9;
}


function simpleMultiplication(number){
    return number%2 === 0 ? number * 8 : number * 9;
}


const simpleMultiplication = number =>
    (8 + number % 2) * number;
*/

