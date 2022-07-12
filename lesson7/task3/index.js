const flatArray = arr => {
    const flatArray = arr 
    .reduce((acc, elem) => {
        return acc.concat(elem);
    }, []);    
    return flatArray.sort((a, b) => a - b);
}

const initArray = [1, [8, 3, 2], 11, 6, [17, 13, 9]];
console.log(flatArray(initArray));