const fx = (obj, props) =>
    props.reduce((res, props) => ((res[props] = obj[props]), res), {}),
  res = fx({ name: 12, age: 34, city: 'NY' }, ['name', 'city']);
console.log(res); 
