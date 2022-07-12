function addPropertyV1(obj, key, value) {
  // put your code here
 
  obj[key] = value
  return obj
}

// put your code here
function addPropertyV2(obj, key, value) {
  // put your code here
  obj[key] = value
  Object.assign(transaction);
  return obj;
}
// put your code here
function addPropertyV3(obj, key, value) {
  // put your code here
  const arr = {
    [key]: value
  }
  const Copy = Object.assign({},obj, arr);
  return Copy;
  
}
// put your code here
function addPropertyV4(obj, key, value) {
const arr = {
  [key]: value,
};
 var que = { ...obj, ...arr};
 return que;
}
// examples
const transaction = {
  value: 170,
};
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
