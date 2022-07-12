function getKeys(obj) {
  let arr = [];

  for (let key in obj) {
    console.log(key);
  }
  return arr;
};

// examples
console.log(getKeys({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
