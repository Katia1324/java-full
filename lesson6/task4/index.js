function swap(numbers) {
  // put your code here
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
 const len = numbers;
 for (let i = 0; i < numbers.length; i++) {
     len.push(len[i] + 1);
 }
    return numbers;
}



// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]




const todoItems = [1, 2, 3, 4, 5];
const itemsIncremented = [];
for (let i = 0; i < todoItems.length; i++) {
  itemsIncremented.push(todoItems[i] + 1);
}

console.log(itemsIncremented); // [2, 3, 4, 5, 6]

const todos = ['Написание статьи', 'Вычитка'];
todos.push('Публикация');
console.log(todos); 