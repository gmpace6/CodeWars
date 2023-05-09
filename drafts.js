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
console.log(digitize(0))