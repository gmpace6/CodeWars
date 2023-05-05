// Instructions

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// let answerArr = []

// function findMultiples(integer, limit) {
//     for (let i = 1; i <= limit; i++) {
//         if(integer * i <= limit) {
//             answerArr.push(integer * i)
//         } else {
//             return answerArr
//         }
//     }
// }
// console.log(findMultiples(2, 36))

// let answerArr1 = []

// function findMultiples1(integer, limit) {
//     for (let i = 1; (i * integer) <= limit; i++) {
//         answerArr1.push(integer * i)
//     }
//     return answerArr1
// }

// console.log(findMultiples1(5, 25)) // prints [3, 6, 9, 12, 15] to the console
// console.log(findMultiples1(1, 2))
// console.log(findMultiples1(5, 7))
// console.log(findMultiples1(4, 27))
// console.log(findMultiples1(11, 54))


// while(i something){
//     do something else
//     i++
// }

function findMultiples(int, limit){
    const arr = [];
    let i = 1;
  
    while(int * i <= limit){
      arr.push(int * i);
      i++;
    }
      return arr;
  }

console.log(findMultiples(5, 25))
console.log(findMultiples(1, 2))
console.log(findMultiples(5, 7))
console.log(findMultiples(4, 27))
console.log(findMultiples(11, 54))


// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let dadAgeAtSonBirth = dadYearsOld - sonYearsOld
        return Math.abs((sonYearsOld - dadAgeAtSonBirth))
  }
  console.log(twiceAsOld(49, 25))