//Array Data Structure
let arr = [1, 2, 3, 4, 5];

//Traversing an Array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Insertion in Array
function insert(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

newArr = insert(arr, 2, 10);
console.log("Insert Array", newArr);

//Deletion in Array
function deleteElement(arr, index) {
  arr.splice(index, 1);
  return arr;
}

deletedArr = deleteElement(arr, 3);

console.log("Deleted Array", deletedArr);
