function FindMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

console.log(FindMaxMin([3, 2, 5, 7, 3, 1, 4, 6]));
