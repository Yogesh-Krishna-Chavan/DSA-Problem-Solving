function leftRotateArr(arr) {
  if (arr.length === 0) {
    return arr;
  }
  return [...arr.slice(1), arr[0]];
}

console.log(leftRotateArr([1, 2, 3, 4, 5]));
