// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade(s1, s2, s3) {
    // Code here
    let a = (s1 + s2 + s3) / 3;
    let x = 'A';
    if (90 <= a && a < 100) {
        x = 'A';
    }
    else if (80 <= a && a < 90) {
        x = 'B';
    }
    else if (70 <= a && a < 80) {
        x = 'C';
    }
    else if (60 <= a && a < 70) {
        x = 'D';
    } else if (0 <= a && a < 60)
        {x = 'F'}
    return x;
}


console.log(getGrade(44, 55, 52));


/*
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}


function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}


function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length
  
  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}




function getGrade (s1, s2, s3) {
 var avg = (s1 + s2 + s3)/3;
 switch(true) {
   case (avg >= 90):
     return 'A';
   case ( avg >= 80):
     return 'B';
   case ( avg >= 70):
     return 'C';
   case ( avg >= 60):
     return 'D'; 
   default:
     return 'F';   
 }
}





Kill3rJ, muirurikin, bazzi, Iryna Trusevich, yasminekammoun, Mukhammedjohn

function getGrade (s1, s2, s3) {
  let meanScore = (s1 + s2 + s3)/3;
  if( meanScore >= 90 && meanScore <= 100){
    return 'A';
  } else if( meanScore >= 80 && meanScore < 90) {
    return 'B'
   } else if( meanScore >= 70 && meanScore < 80) {
    return 'C'
   } else if( meanScore >= 60 && meanScore < 70) {
    return 'D'
   } else {
    return 'F'
  }
}





function getGrade (s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if(avg <60) return 'F';
  if(avg <70) return 'D';
  if(avg < 80) return 'C';
  if(avg <90) return 'B';
  return 'A';
}





var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);






function getGrade (s1, s2, s3) {
  // Code here
  var avg = (s1 + s2 + s3) / 3
  if (avg >= 90)
  	return 'A'
  if (avg >= 80)
  	return 'B'
  if (avg >= 70)
  	return 'C'
  if (avg >= 60)
  	return 'D'
  return 'F'
}





function getGrade (s1, s2, s3) {
  const avg = (s1+s2+s3)/3;
  return [
    [90, 'A'],
    [80, 'B'],
    [70, 'C'],
    [60, 'D'],
    [00, 'F']
  ].find(grades => {
    return grades[0] <= avg
  })[1]
}





function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3
  if (average < 60) return 'F'
  if (average < 70) return 'D'
  if (average < 80) return 'C'
  if (average < 90) return 'B'
  return 'A'
}

*/