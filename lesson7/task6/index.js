function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = arr.slice()
  return copy.reverse(arr)
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
