function reverseArray(arr) {
      if (!Array.isArray(arr)) {
        return null;
      }
  const rev = new Array();
  for (var i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}

const arr = [1, 2, 3, 4, 5];
const rev = reverseArray(arr);
console.log(rev);
