// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.



function updateLight(current) {
    switch(current) {
      case 'green':
        return 'yellow';
        break;
      case 'yellow':
        return 'red';
        break;
      case 'red':
        return 'green';
        break;
    }
  }



/*
Other solutions


function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }


const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]


function updateLight(current) {
  
    if (current === 'green'){
      current = 'yellow'
    } else if (current === 'yellow') {
      current = 'red'
    } else if (current === 'red') {
      current = 'green'
    } else {}
  
  return current
  }


const updateLight = current => {
    return {
      red: 'green',
      yellow: 'red',
      green: 'yellow'
    }[current];
  }


function updateLight(current) {
    const states = ['green', 'yellow', 'red'];
    let nextStateIndex = (states.indexOf(current) + 1) % states.length;
    return states[nextStateIndex];
  }


const updateLight = C => C == 'green' ? 'yellow' : C == 'yellow' ? 'red' : C == 'red' ? 'green' : 'error';


const updateLight = current =>
    ({green: `yellow`, yellow: `red`, red: `green`})[current];
*/