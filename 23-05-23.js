// // Your task is to write a function which returns the sum of a sequence of integers.

// // The sequence is defined by 3 non-negative values: begin, end, step.

// // If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// // Examples

// // 2,2,2 --> 2
// // 2,6,2 --> 12 (2 + 4 + 6)
// // 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// // 1,5,3  --> 5 (1 + 4)

// const sequenceSum = (begin, end, step) => {
//   let answer = begin;
//   let answer2 = 0;
//   let ansArr = [begin];
//   if (begin > end) {
//     return 0;
//   } else if ((end - begin) % step === 0) {
//     let numSteps = end / step - 1;
//     for (let i = 0; i < numSteps; i++) {
//       answer = answer + step;
//       ansArr.push(answer);
//     }
//     // console.log(ansArr)
//     for (let j = 0; j < ansArr.length; j++) {
//       answer2 += ansArr[j];
//     }
//     return answer2;
//   } else if ((end - begin) % step != 0) {
//     let numSteps = Math.floor(end / step);
//     for (let i = 0; i < numSteps; i++) {
//       answer = answer + step;
//       ansArr.push(answer);
//     }
//     // console.log(ansArr)
//     for (let j = 0; j < ansArr.length; j++) {
//       answer2 += ansArr[j];
//     }
//     return answer2;
//   }
// };


// console.log(sequenceSum(2,2,2))
// console.log(sequenceSum(2,6,2))
// console.log(sequenceSum(1,5,1))
// console.log(sequenceSum(1,5,3))



const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
  
    const numSteps = Math.floor((end - begin) / step) + 1;
    const sum = (numSteps / 2) * (2 * begin + (numSteps - 1) * step);
  
    return sum;
  };
  
//   console.log(sequenceSum(2, 2, 2)); // Output: 2
//   console.log(sequenceSum(2, 6, 2)); // Output: 12
//   console.log(sequenceSum(1, 5, 1)); // Output: 15
//   console.log(sequenceSum(1, 5, 3)); // Output: 5


//   Task
//   Write a function which when given a non-negative BigInt n and an arbitrary base b, returns the number reversed in that base.
  
//   Examples
//   n=12 and b=2 return 3, because 12 in binary is "1100", which reverses to "0011", equivalent to 3 in decimal.
//   n=10 and b=5 return 2, because 10 in base-5 is "20", which reverses to "02", equivalent to 2 in decimal.
//   n=45 and b=30 return 451, because 45 in base-30 is "1F", which reverses to "F1", equivalent to 451 in decimal.
//   n=3 and b=4 return 3, because 3 in base-4 is "3", which reverses to "3", equivalent to 3 in decimal.
//   n=5 and b=1 return 5, because 5 in unary is "|||||", which reverses to "|||||", equivalent to 5 in decimal.
//   Note
//   The function should return an integer.
//   The base b will be greater or equal to 1.
//   Edge case: Base-1 is also used in this kata to represent the unary numeral system. Think of it as a system of tally marks. For example:
//   3 (decimal) -> ||| (unary)
//   5 (decimal) -> ||||| (unary)


  function reverseNumber1(n, b){
    if(b === 1) {
        return n
    } else {
    let newStr = n.toString(b)
    let splitStr = newStr.split('').reverse().join('')
    return parseInt(splitStr, b)
  }
}
  console.log(reverseNumber1(12, 2))
  console.log(reverseNumber1(10, 5))
  console.log(reverseNumber1(45, 30))
  console.log(reverseNumber1(3, 4))
  console.log(reverseNumber1(5, 1))
