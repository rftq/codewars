// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"




function noSpace(x){
    let xRes = "";
    for(i=0; i<x.length;i++){
      xRes += x[i].trim();
    }
    return xRes;
  }




/*
Other solutions


function noSpace(x){
    return x.replace(/\s/g, '');
  }


function noSpace(x){return x.split(' ').join('')}


const noSpace = x => x.replace(/ /g, "");


function noSpace(x) {
    return x.replaceAll(' ', '');
  }


function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
}


const noSpace=x=>x.split(" ").join("");


function noSpace(x){
    return x.replace(/ /g,'')
 }


function noSpace(x){
    return x.replace(/\s+/g,'')
}


function noSpace(x){
    return x.split(' ').join('');
}


function noSpace(x){
    let arr =  x.split(' ');
    return arr.reduce((a,b)=>a+b);
}


const noSpace = x =>
    x.split(' ').join('')


const noSpace = x => x.replaceAll(' ', '');



noSpace = x => x.replace(/\s/g, '');
*/


