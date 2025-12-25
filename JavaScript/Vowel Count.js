// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.




function getCount(str) {
  const letters = ["a", "e", "i", "o", "u"]
  let result = 0;
  for (let i = 0; i < letters.length; i++) {
    for (let x = 0; x < str.length; x++) {
    if (str[x].includes(letters[i])) {
        result += 1;
    }
}
}
return result;
}

let str = "abracadabra";

console.log(getCount(str));



/*
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}



function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}



function getCount(str) {
  var vowelsCount = 0;
  for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
  }
  return vowelsCount;
}




const getCount = str => str.replace(/[^aeiou]/g, '').length;






function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').filter(letter => {
    return vowels.includes(letter)? true : false;
  }).length;
}




function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsCount = 0;
  
  // enter your majic here
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }
  
  return vowelsCount;
}



function getCount(str) {
  let vowelsCount = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for(let char of str) {
      if(vowels.includes(char)) {
          vowelsCount++
      }
  }

  return vowelsCount;
}








*/