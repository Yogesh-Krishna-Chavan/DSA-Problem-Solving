function RightRotateArray(arr) {
  if (arr.length === 0) {
    return arr;
  }
  return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
}

console.log(RightRotateArray([1, 2, 3, 4, 5])); // Output: [4, 5, 1, 2, 3]
