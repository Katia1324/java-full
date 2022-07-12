function includes(arr, elem) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 5));