// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]





function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(Number.isInteger);
  }




/*
Other solutions
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }


function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }

   
function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
  }


function filter_list(l) {
    return l.filter(Number.isInteger);
  }


const filter_list = l => l.filter(c => typeof c === 'number');


function filter_list(l) {
    var res = [];
                for(var item=0;item<l.length;item++)
                {
                    if (typeof l[item] === "number")
                    {
                        res.push(l[item]);
                    }
      
                }
                return res;
    }


function filter_list(l) {
    return l.filter(i=> typeof i !== 'string');
}


const filter_list = l => l.filter(Number.isInteger);


function filter_list(l) {
    return l.filter(x => typeof(x) =="number");
  }
*/

