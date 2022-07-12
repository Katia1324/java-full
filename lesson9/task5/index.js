function mergeObjectsV1(obj1, obj2) {
  // put your code here
  const res = Object.assign({}, obj1, obj2);
  return res;
}

function mergeObjectsV2(obj1, obj2) {
  // put your code here
  const res1 = Object.assign({}, obj2, obj1);
  return res1;
}

function mergeObjectsV3(obj1, obj2) {
  // put your code here
  const mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
}

function mergeObjectsV4(obj1, obj2) {
  // put your code here
  const mergedObject1 = { ...obj2, ...obj1 };
  return mergedObject1;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
