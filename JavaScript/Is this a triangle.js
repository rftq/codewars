// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 


function isTriangle(a,b,c) {
    let result = true;
    let bc = b + c;
    let ac = a + c;
    let ab = a + b;
    if (a >= bc || b >= ac || c >= ab){
      result = false;
    } else if (a < 0 || b < 0 || c < 0) {
      result = false;
    }
    return result;
    }




/*    
Other solutions
    function isTriangle(a,b,c)
    {
       return a + b > c && a + c > b && c + b > a;
    }


    var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2


    function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}


function isTriangle(a,b,c) {
    var sides = [a, b, c].sort();
    return (sides[0] + sides[1] > sides[2]);
  }


  const isTriangle = (a$,b$,c$) => a$ + b$ > c$ && a$ + c$ > b$ && b$ + c$ > a$;


  function isTriangle(a,b,c)
{
 return Math.max(a,b,c)<(a+b+c-Math.max(a,b,c));
}


function isTriangle(a, b, c) {
    var max = Math.max(a, b, c);
    return a + b + c - max > max;
}


function isTriangle(a, b, c) {
    var max = Math.max(a, b, c);
    return a + b + c - max > max;
}


function isTriangle(a,b,c)
{
   var [shortest, shorter, longest] = [a, b, c].sort();
   
   return longest < (shorter + shortest);
}


function isTriangle(a,b,c) {
    const s = a/2 + b/2 + c/2
    return s * (s - a) * (s - b) * (s - c) > 0
 }


 function isTriangle(a,b,c)
{
    return Math.min(a+b,a+c,b+c) > Math.max(a,b,c) ? true:false
  
}


function isTriangle(a,b,c) {
    if (a+b<=c) {
     return false;
   }
   else if (b+c<=a) {
     return false;
   }
   else if (c+a<=b) {
     return false;
   }
   else {
     return true;
   }
 }


 function isTriangle(a, b, c)
{  
   return (a < b + c) && (b < a + c) && (c < a + b);
}
*/