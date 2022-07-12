function getSubArray(array, n) {
  if (array == null) {
    return false;}
  if (n == null) {
    return array[0];}
    else {
    return array.slice(0, n)}
}



console.log(getSubArray([1, 2, 3, 4, 5, 6], 4)); 
