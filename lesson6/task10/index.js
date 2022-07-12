function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const clon = arr.slice(0);
  return clon;
}

console.log(cloneArr([2, 4, 6, 8]));
