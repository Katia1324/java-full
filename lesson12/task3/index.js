// input: масив транзакцій
// output: масив

// 1. робимо копію масива (slice)
// 2. фільтруэмо масив, щоб були лише цифри (filter)
// 3. обрізаємо пробіли в масиві (replace)
// 4. до кожного елемента масива добавляэмо правильний формат ('$'+ ...) 
// 5. робимо заокруглення до 2 знаків після коми 
// 6. повертаємо відформатований масив


const cleanTransactionsList = (arr) => {
    const copy = arr
      .slice()
      .filter((el) => isFinite(el))
      .map((el) => Number.parseFloat(el).toFixed(2))
      .map((el) => el = '$' + el)
    return copy;
    
  }
  
 



console.log(cleanTransactionsList([' 1.9 ', '16.4', 17 , ' 1 dollar ']))