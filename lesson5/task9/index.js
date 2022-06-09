function getPrimes(num) {
  console.log(2);
  for (let i = 3; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j != i) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}
console.log(getPrimes(7));
