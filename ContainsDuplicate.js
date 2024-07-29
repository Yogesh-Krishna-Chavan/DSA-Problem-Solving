/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let uniqueSet = new Set();
  for (let num of nums) {
    if (uniqueSet.has(num)) {
      return true;
    }
    uniqueSet.add(num);
  }
  return false;
};

//Test cases
const num1 = [1, 2, 3, 1];
const num2 = [1, 2, 3, 4];
const num3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(num1));
console.log(containsDuplicate(num2));
console.log(containsDuplicate(num3));
