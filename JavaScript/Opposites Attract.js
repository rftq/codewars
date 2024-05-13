// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.



function lovefunc(flower1, flower2){
    a = flower1 % 2;
    b = flower2 % 2;
    if (a == b) {
      return false;    
    } else return true;
  }



/*
Other solutions


function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }



function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
  }



function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 == 1;
  }


function lovefunc(flower1, flower2){
    return (flower1+flower2)%2!=0; // moment of truth
   }


   function lovefunc (flower1, flower2){
    const num = flower1 + flower2
    if ( num % 2 == 0) {
      return false;
      }else{
      return true;
    }
  }


function lovefunc(flower1, flower2){
    return Boolean((flower1 - flower2) % 2)
  }


  function lovefunc(flower1, flower2){
    // moment of truth
    return flower1 % 2 !== flower2 % 2;
*/

