const getTotalPrice = (arr) => {
  if (!Array.isArray(arr) && nums.length == 0) {
    return null;
  }
  const sum = arr.reduce((a, b) => a + b);
  const x = (Math.floor(sum * 100) / 100)
  Number(sum.toFixed(2))
  Number(sum.toLocaleString())
  return '$'+x;
};

// examples
console.log(getTotalPrice([10.1, 10.047, 10.9]));
console.log(getTotalPrice([2.1, 5.581, 1.6]));