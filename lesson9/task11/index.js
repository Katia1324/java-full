const obj = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
};
const getCustomersList = (obj) => {
  const copy = Object.entries(obj)
  const arr = copy.map((arr) => {
    const res = {... arr[1]}
    res.id = arr[0];
    return res
  } )

  const customers = arr.sort((a, b) => (a.age > b.age ? 1 : -1));
  return customers;
  
}

console.log(getCustomersList(obj));

