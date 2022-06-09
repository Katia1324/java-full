const n = 1000;
let sum = 0;
let i = 1;
let x = 1234;

while(i <= n) {
    sum += i;
    i++
}
console.log(sum);

let a = Math.trunc(sum / x);
console.log(a);

let b = Math.trunc(sum % x);
console.log(b);


console.log(a>b);
console.log(a<b);