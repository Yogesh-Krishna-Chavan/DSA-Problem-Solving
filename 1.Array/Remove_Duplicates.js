function remove_duplicates(arr) {
  return [...new Set(arr)];
}

console.log(remove_duplicates([1, 2, 3, 2, 1]));
