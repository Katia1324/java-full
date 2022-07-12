const sortDesc = numbers => {
    numbers.sort((a, b) => (b - a));
    return numbers;
}
const arr = [2, 30, 4, 1, 9, 3, 21, 11];

console.log(sortDesc(arr));