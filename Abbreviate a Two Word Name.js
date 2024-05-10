// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F





function abbrevName(name){
    surname = '';
    for (i=0; i<name.length; i++){
      if (name[i] == " "){
        surname = name[i+1];
      }
    }
    return name[0].toUpperCase() + "." + surname.toUpperCase();
  }





/*
Other solutions

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }


function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}



function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }


function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }


const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()


function abbrevName(name){

    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

}


const abbrevName = (name) => {
    return name.split(" ").map(name => name[0].toUpperCase()).join(".");
  };


function abbrevName(name){
    if (typeof name === 'string') {
      let names = name.split(' ');
      return `${names[0][0]}.${names[1][0]}`.toUpperCase();
    }
    console.log(arguments.callee.name + ': Argument must be string!');
  }


function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial
}


const abbrevName = (name) => name.split(' ').map(i => i.charAt(0).toUpperCase()).join('.');


function abbrevName(name){
    name = name.toUpperCase().split(' ');
    return name[0][0] + '.' + name[1][0];
}
*/