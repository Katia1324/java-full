const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice(0);
  
}
const arr = [2, 4, 6, 8];
console.log(cloneArr([arr]));
