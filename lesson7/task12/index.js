const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
    
  return arr.reduce((a, b) => a + b) / arr.length;
};

const arr = [10, 10, 10, 10];

console.log(sum(arr));
