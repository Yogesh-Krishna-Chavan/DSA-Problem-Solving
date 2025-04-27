function CheckTwoArraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.every((value, index) => value === arr2[index]);
  }
}

console.log(CheckTwoArraysAreEqual([1, 2, 3], [1, 2, 3]));
