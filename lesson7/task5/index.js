function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = arr.slice();
  return copy.map(function (e) {
    return e ** 2;
  });
}

const arr = [1, 10, 9, 11];

// examples
console.log(squareArray(arr)); // ==> [1, 100, 81, 121]
