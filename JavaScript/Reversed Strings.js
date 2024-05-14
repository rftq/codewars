// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'




function solution(str){
    let newStr = '';
    for(i=str.length-1; i>=0; i--){
      newStr += str[i];
    }
    return(newStr);
  }




/*
  Other solutions


  function solution(str){
    return str.split('').reverse().join('');  
  }


  const solution = str => str.split('').reverse().join('');


  const solution = s => [...s].reverse().join('')


  function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }


  let solution = str => [...str].reverse().join('');


  function solution(str){
    let n = ''
    for(let i of str){
      n = i+n
    }
    return n
  }


  function solution(str){
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
  }

  */
