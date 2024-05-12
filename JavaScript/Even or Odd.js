// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



function evenOrOdd(number) {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
}



/*
Other solutions


function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }


const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even'; 


const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd';


const evenOrOdd = number => number % 2 == 0 ? "Even" : "Odd" 
*/
