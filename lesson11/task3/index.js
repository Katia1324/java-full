// input: str (строка)
//        num (число - вказує скільки буде символів в кожній підстроці)
//output: масив
//
// 1. якщо в першому аргументі не строка вертаємо null.
// 2. створюємо масив
// 3. ділимо строку на подстроки і пушимо в масив
// 4. якщо довжина підстроки менша за num(число), то добавляємо '.' до потрібної кількості.
// 5. якщо другий аргумент не заданий, строка має ділитися на підстроки по 10 символів.

function splitString(str, num = 10) {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = str.substr(startPosition, num);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPosition += num;

    const x = strArr[strArr.length - 1];
    if (x.length < num) {
      strArr[strArr.length - 1] = x.padEnd(num, '.');
    }
  }

  if (typeof str !== 'string') {
    return null;
  }

  return strArr;
}

console.log(splitString('sfdsfcgfghtfcvbjhgs', 4));
console.log(splitString('sfdsfcgfghtfcvbjhgs'));
console.log(splitString('sfdsfcgfghtfcvbjhgs', 3));
console.log(splitString('sfdsf'));
