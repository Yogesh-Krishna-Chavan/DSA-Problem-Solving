/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = new Array(n);

  leftProduct = 1;
  rightProduct = 1;

  for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return output;
};

//Test cases
nums1 = [1, 2, 3, 4];
nums2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums1));
console.log(productExceptSelf(nums2));
