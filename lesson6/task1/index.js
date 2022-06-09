
function getArrayBounds(arr) {
  if(!Array.isArray(arr)) {
      return null;
  }
  // put your code here
  return[arr.length, arr[0], arr[arr.length - 1]];
}
console.log(getArrayBounds([1, 10, 9, 11]));
console.log(getArrayBounds(10, 12, 14));

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
