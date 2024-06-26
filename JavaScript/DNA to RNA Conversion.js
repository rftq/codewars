// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.



function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    rna = "";
    for (i=0; i<dna.length; i++){
      if (dna[i] == "T"){
        rna += "U";
      } else {
        rna += dna[i];
      }
    }
    return rna;
  }




/*
Other solutions

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }


const DNAtoRNA = dna => dna.replace(/T/g, 'U');


function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
  }


function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}


function DNAtoRNA(dna) {
    return dna.replace(/t/gi, 'U');
}


DNAtoRNA = dna => dna.split('').map( i =>  i == 'T' ? i = 'U' : i).join('');


function DNAtoRNA(dna){
	return dna.split("").map(function(rna){
		return rna.replace("T","U")
	}).join("")
}


function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  for (var i = 0; i < dna.length; i++)
  {
    dna = dna.replace('T', 'U');
  }
  
  return dna;
}
*/
