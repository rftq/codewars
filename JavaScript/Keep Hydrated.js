// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5




function litres(time) {
    litr = time * 0.5;
    return Math.floor(litr);
  }




/*
Other solutions


function litres(time) {
    return Math.floor(time * 0.5);
  }


function litres(time) {
    return Math.floor(time/2);
  }


const litres = time => Math.floor(time * 0.5);


litres = t => ~~(t / 2);


function litres(time) {
    return parseInt(time/2);
  }


const litres = time => Math.floor(time / 2);


function litres(time) {
    return time>>1
  }


function litres(time) {
    return (time / 2) | 0;
  }


litres=time=>~~(time*0.5)
*/