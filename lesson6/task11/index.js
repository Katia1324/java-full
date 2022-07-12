
function checker(arr) {
  let min = arr[0],
    max = arr[0],
    i,
    v;

  for (i = 1; i < arr.length; i++) {
    v = arr[i];
    if (v > max) max = v;
    if (v < min) min = v; 
  }
  
  let summ = min + max;
  
  if (summ > 1000) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checker([1, 2, 3, 4, 1005]));

