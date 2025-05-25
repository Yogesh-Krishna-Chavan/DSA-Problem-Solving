function findDuplicate(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let val of arr) {
    if (seen.has(val)) {
      duplicates.add(val);
    } else {
      seen.add(val);
    }
  }
  return [...duplicates];
}

console.log(findDuplicate([1, 2, 2, 3, 4, 3, 4, 5]));
