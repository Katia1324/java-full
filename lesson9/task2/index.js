const copyObj = (obj) => {
  let objCopy = {}; 
  let key;

  for (key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

const obj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

console.log(copyObj(obj));
