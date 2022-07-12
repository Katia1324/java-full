const checkSum = (arr) => {
  let sumOfNumbers = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    sumOfNumbers += arr[i];
  }
  if (sumOfNumbers > 100) {
    return true;
  } else {
    return false;
  }
};
console.log(checkSum([10, 10, 10]));
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
