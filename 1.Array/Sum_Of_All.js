function Find_sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(Find_sum([1, 2, 3, 4, 5]));
