const getAdults = (obj) => {
  const arr = {};
  for (let key in obj) {
    if (obj[key] >= 18) 
    arr[key] = obj[key]
  }
  return arr;
};
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
