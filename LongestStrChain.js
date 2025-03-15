var longestStrChain = function (stringArray) {
  let longestString = "";

  for (let i = 0; i < stringArray.length; i++) {
    const currentString = stringArray[i];

    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }

  return longestString.length;
};

let words = ["a", "b", "ba", "bca", "bda", "bdca"];

console.log(longestStrChain(words));
