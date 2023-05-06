// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.


function checkForFactor (base, factor) {
    return base % factor === 0
  }
console.log(checkForFactor(121, 11))


//   Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return number * -1
  }
  console.log(opposite(-3.1425926))

 
  
//   You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

let arr3 = [1,-4,7,12]
let num3 = 0
function positiveSum(arr3) {
  for (let i = 0; i < arr3.length; i++)
  if(arr3[i] > 0) {
    num3 += arr3[i]
}
return num3
}
console.log(positiveSum(arr3))



  //   Convert number to reversed array of digits
  // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
  
  // Example(Input => Output):
  // 35231 => [1,3,2,5,3]
  // 0 => [0]
  
  function digitize(n) {
      let nArr = []
      while (n > 0) {
        nArr.push(n % 10)
        n = Math.floor(n / 10)
      }
      return nArr
  }
console.log(digitize(54321))