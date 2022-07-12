function compareObjects(obj1, obj2) {
  // put your code here
  for(var p in obj1){
        if (obj1.hasOwnProperty(p)) {
          if (obj1[p] !== obj2[p]) {
            return false;
          }
        }
    }
    for (var p in obj2) {
      if (obj2.hasOwnProperty(p)) {
        if (obj1[p] !== obj2[p]) {
          return false;
        }
      }
    }
    return true;
};



// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};


console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
