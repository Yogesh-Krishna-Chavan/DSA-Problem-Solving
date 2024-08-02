/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};
  let bucket = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  for (let [num, freq] of Object.entries(map)) {
    num = parseInt(num);
    if (!bucket[freq]) {
      bucket[freq] = new Set().add(num);
    } else {
      bucket[freq] = bucket[freq].add(num);
    }
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...Array.from(bucket[i]));
    }
    if (result.length === k) {
      break;
    }
  }
  return result;
};

//Test cases
const nums1 = [1, 1, 1, 2, 2, 3],
  k1 = 2;
const nums2 = [1],
  k2 = 1;

console.log(topKFrequent(nums1, k1));
console.log(topKFrequent(nums2, k2));
