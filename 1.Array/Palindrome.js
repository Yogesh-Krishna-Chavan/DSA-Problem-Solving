function isPalindrome(arr) {
  let reversed = [...arr].reverse();
  return arr.join("") === reversed.join("");
}

console.log(isPalindrome([1, 2, 3, 2, 1]));
