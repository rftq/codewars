// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


const words = ['hello', 'world', 'this', 'is', 'great'];



function smash () {
   result = "";
  for (let i = 0; i < words.length; i++) {
   result += words[i] + " ";
  }
   return result.trim();
};

console.log(smash(words));



/*
Other solutions


smash = function (words) {
  return words.join(" ");
};



const smash = words => words.join(' ');




function smash (words) {
    "use strict";
    return words.join(' ');
};



function smash (words) {
   
  return words.join(" ");
  
};



const smash = w => w.join(' ');



function smash (words) {
   return words.join(' ').trim();
};





*/