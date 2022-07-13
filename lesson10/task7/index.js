
const superRound = (num, prec) => [
  Math.floor(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.round(num * 100) / 100,
  +num.toFixed(prec)
  
];

 


// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(11.12557, 3)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
