const elementList = [1, 5, '17', 2, NaN, Infinity];

const getFiniteNumbers = arr => arr
    .filter((el) => Number.isFinite(el))
   


const getFiniteNumbersV2 = arr => arr
    .filter((el) => isFinite(el));
  

const getNaN = arr => arr
    .filter((el) => Number.isNaN(el));


const getNaNV2 = arr => arr
    .filter((el) => isNaN(el));


const getIntegers = (arr) => arr
    .filter((el) => Number.isInteger(el));


console.log(getFiniteNumbers(elementList));
console.log(getFiniteNumbersV2(elementList));
console.log(getNaN(elementList));
console.log(getNaNV2(elementList));
console.log(getIntegers(elementList));
