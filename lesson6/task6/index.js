function squareArray(arr) {
    if(!Array.isArray(arr)) {
      return null;
  }
  var cub = [];

  for (let i = 0; i < arr.length; i++) {
    cub.push(Math.pow(arr[i], 2));
  }
  return cub;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
