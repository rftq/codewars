// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



function isIsogram(str){
    str = str.toLowerCase();
    let count = 0;
    let result = true;
    for (let i = 0; i < str.length; i++) {
          for (let j = i + 1; j < str.length; j++) {
              if (str[i] == str[j]) {
                  result = false;
              }
      }
    }
      return result;
  }




/*
Other solutions


function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}


function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }


function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}


function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }


function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}


function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
  }


function isIsogram(str){
    //Create array from string and make it uppercased
    var arr = str.split('').map(function(el) {
      return el.toUpperCase();
    }); 
    //Test each value for duplicates.
    return arr.every(function(el) {
      return arr.indexOf(el) == arr.lastIndexOf(el);
    });
}


function isIsogram(word){
    word = word.toLowerCase().split("").sort();
    for (var i=0;i<word.length-1;i++){
      if (word[i]==word[i+1]) return false;
      }
    return true;
  }


function isIsogram(str) {
    return str.length == new Set(str.toLowerCase()).size;
}


const isIsogram=str=>new Set(str.toLowerCase()).size==str.length


function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length
  }


  function isIsogram(str){
    // ignore case
    str = str.toLowerCase();
    
    var stash = {}; // hold the existing letters
    
    var found = false;
    
    // walk the string letter by letter
    for( var i = 0; i < str.length; i++){
      
      // is the letter present in stash?
      if( stash[str[i]] )
        return false; // then its double => return with false
      else 
        stash[str[i]] = true;  // otherwise it has not been found
      
    }
    
    return true; // if we pass all letters, none was double
    
  }
  */
