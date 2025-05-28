var twoSum = function (nums, target) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numObj.hasOwnProperty(complement)) {
      return [numObj[complement], i];
    }a
    numObj[num] = i;
  }
  return [];
};

//Test cases
const nums1 = [2, 7, 11, 15],
  target1 = 9;
const nums2 = [3, 2, 4],
  target2 = 6;
const nums3 = [3, 3],
  target3 = 6;

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
