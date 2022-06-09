const getSum = (from, to) => {
  if (from % 2 !== 0 || to % 2 !== 0) {
    console.log(from, to);
    return -1;
  }
  if (from > to || from === to) {
    console.log(from);
    return -1;
  }
  return ((from + to) * (1 + (to - from) / 2)) / 2;
};

console.log(getSum(10, 20)); 
