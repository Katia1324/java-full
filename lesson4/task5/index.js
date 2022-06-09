const n = 20;
let result = 1;

for (let m = 10; m <= n; m++) {
  if (m % 2 === 0) continue;
  result *= m;
}
console.log(result);
