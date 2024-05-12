// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.





var number = function(busStops){
    // Good Luck!
    let people = 0;
    for (i = 0; i<busStops.length; i++){
        for (x = 0; x<1; x++){
          people += busStops[i][0];
          people -= busStops[i][1];
        }
    }
    return(people);
  }




/*
Other solutions
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);


var number = function(busStops){
	var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}


const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)


const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);


var number = function(busStops){
    return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
  }



const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)


var number = function(busStops){
    let peopleInBus = 0;
    busStops.forEach(([enter, left]) => {
      peopleInBus += enter - left;
    })
    
    return peopleInBus
  }


const number = busStops => {
    return busStops.reduce((people, next) => { 
      const [on, off] = next;
      return (people + on) - off;
    }, 0);
  }


const number = ( bS ) => bS.reduce(($,b) => $ + b[0] - b[1], 0);
*/
