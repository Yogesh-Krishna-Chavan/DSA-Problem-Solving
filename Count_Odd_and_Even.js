// You are given an array arr[]. Your task is to count the number of even and odd elements. Return first odd count then even count.

// Examples:

// Input: arr = [2, 3, 4, 5, 6]
// Output: 2 3
// Explanation: There are two odds[3, 5] and three even[2, 4, 6] present in the array.

// Input: arr = [22, 32, 42, 52, 62]
// Output: 0 5
// Explanation: All the elements are even.

function countOddEven(arr) {
  let countOdd = 0;
  let countEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  return [countOdd, countEven];
}

//test cases
arr = [2, 3, 4, 5, 6];
console.log(countOddEven(arr));
