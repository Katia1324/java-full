const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cub = arr.slice(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) continue;
      arr.slice(cub[i] += delta);
    }
  return cub;
};


console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120));

