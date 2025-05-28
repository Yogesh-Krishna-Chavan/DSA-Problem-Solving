function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
    }
    return i;
}

let myArr = [3, 2, 2, 3];
let val = 2;
let len1 = removeElement(myArr, val);
console.log(myArr.slice(0, len1));
