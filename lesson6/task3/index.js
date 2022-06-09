function getSpecialNumbers(from, to) {
  // put your code here
  let specialNumbers = [];

  for (let j = from; j <= to; j++) {
    if (j % 3 === 0)  {
      specialNumbers.push(j);
    }
  }
  return specialNumbers;
}

// examples

console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
