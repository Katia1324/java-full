
function findDivCount(a, b, n) {
  let result = 0;
  for (let j = a; j <= b; j++) 
  {
    if ((j % n == 0) & (j != 0)) {
    result++;
    }
  }
  return result;
}
console.log(findDivCount(1,1,3));
