const elementList = [10.10, 5.2, 6.3]

const getParsedIntegers = arr => {
    const result = arr
        .map(el => Number.parseInt(el))
    return result
}

const getParsedIntegersV2 = arr => {
     const result = arr
        .map((el) => parseInt(el));
     return result;
 
}

const getParsedFloats = arr => {
    const result = arr.map((el) => Number.parseFloat(el));
    return result;
  
}

const getParsedFloatsV2 = arr => {
     const result = arr.map((el) => parseFloat(el));
     return result;
  
}

console.log(getParsedIntegers(elementList));
console.log(getParsedIntegersV2(elementList));
console.log(getParsedFloats(elementList));
console.log(getParsedFloatsV2(elementList));