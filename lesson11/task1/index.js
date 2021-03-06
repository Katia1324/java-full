function splitText(str, num = 10) {
  if (typeof str !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = str.substr(startPosition, num);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += num;
  }

  return strArr.join('\n');
}

console.log(splitText('sfdsfcgfghtfcvbjhgs', 4));
console.log(splitText('sfdsfcgfghtfcvbjhgs'));
console.log(splitText('sfdsfcgfghtfcvbjhgs', 3));
console.log(splitText('sfdsf'));
