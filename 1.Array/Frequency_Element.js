function Frequency_Element(arr) {
  let freq = {};
  for (let val of arr) {
    if (freq[val]) {
      freq[val]++;
    } else {
      freq[val] = 1;
    }
  }
  return freq;
}

console.log(Frequency_Element([1, 2, 2, 2, 3, 1, 3, 4]));
