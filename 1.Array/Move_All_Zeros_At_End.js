function Move_All_Zeros_At_End(arr) {
  let nonZero = arr.filter((n) => n !== 0);
  let zeros = arr.length - nonZero.length;
  return [...nonZero, ...Array(zeros).fill(0)];
}

console.log(Move_All_Zeros_At_End([1, 0, 2, 0, 3, 0, 4]));
