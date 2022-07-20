// input : str(в якій буде проходити пошук)
//         text(предмет пошуку)
// output : кількість знайдених підстрок в с троці
// 1. шукаємо скільки було входжень text(підстроки) в str(строку) з допомогою IndexOf
// 2. якщо співпадіння є, то добавляємо до результату
// 3. якщо перший аргумент не переданий, пошуку я=немає, функція вертає 0
// 4. якщо text =' ' , функція має вернути null



function countOccurrences(text, str) {
  if (str === '') {
    return null;
  }
 
let count = 0;
let pos = text.indexOf(str);

while (pos !== -1) {
  count++;
  pos = text.indexOf(str, pos + 1);
}
  return count
 };



console.log(countOccurrences('Thisssissastringssss', 'This'));
console.log(countOccurrences('xc xc xc xcghdjc febhwjka.z,xccnfdjekwls,mxc', 'xc'));
console.log(countOccurrences('xc'));



