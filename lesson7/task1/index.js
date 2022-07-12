const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

    const arr = [1, 2, 3, 4, 7, 9, 10, 12, 15, 16, 17, 21];

    console.log(getSpecialNumbers(arr));