function Sorted_Array(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(Sorted_Array([ 1, 2, 3, 4]));
