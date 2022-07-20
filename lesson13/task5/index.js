function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = arr.slice();
  return copy.reverse(arr);
};

const withdraw = (clients, balances, client, amount) => {
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount) {
    balances[indexOfPerson] -= amount;
    return balances[indexOfPerson];
  } else {
    return -1;
  }
};

const getAdults = (obj) => {
  const arr = {};
  for (let key in obj) {
    if (obj[key] >= 18) arr[key] = obj[key];
  }
  return arr;
};

