// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
  }
  console.log(DNAtoRNA('GCAT'))


//   Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//   In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
//   Example
//   With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
  
//   1 * (2 + 3) = 5
//   1 * 2 * 3 = 6
//   1 + 2 * 3 = 7
//   (1 + 2) * 3 = 9
//   So the maximum value that you can obtain is 9.

let a = 3
let b = 4
let c = 5
  function expressionMatter(a, b, c) {
      let ans1 = a + b + c
      let ans2 = (a + b) * c
      let ans3 = a * (b + c)
      let ans4 = a * b * c
      let ans5 = a + b * c
      let ans6 = a * b + c
    return Math.max(ans1, ans2, ans3, ans4, ans5, ans6)
  }
  console.log(expressionMatter(a, b, c))

//   Wilson primes satisfy the following condition. Let P represent a prime number.
//   Then,
//   ((P-1)! + 1) / (P * P)
//   should give a whole number.
//   Your task is to create a function that returns true if the given number is a Wilson prime.

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num === 0 || num === 1) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }

// function amIWilson(p) {
//     let pFact = factorialize(p-1)
//     return Number.isInteger((pFact + 1) / (p * p)) 
//   }
//   console.log(amIWilson(563))

// Make a function that will return a greeting statement that uses an input; your program should return,
// Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
  console.log(greet('Garrett'))