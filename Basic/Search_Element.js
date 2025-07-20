//Search element in array and return index

let arr = [4, 5, 3, 2, 1, 0, 7];

function searchElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      return i;
    }
  }
  return -1;
}

let result = searchElement(arr, 7);

console.log(result);
