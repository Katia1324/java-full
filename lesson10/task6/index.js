function getRandomNumbers(length, from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);

  if (from > to) {
    return null;
  }

  return Array.from(
    { length },
    () => Math.round(Math.random() * (to - from)) + from
  );
}

console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2, 3, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
