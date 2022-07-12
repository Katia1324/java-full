const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  // put your code here

  userData.id = userId;
  return userData;
}

function addPropertyV4(userData, userId) {
  // put your code here
  const arr = {
    id: userId
  }
  const obj = { ...userData, ...arr };
  return obj;
}

function addPropertyV2(userData, userId) {
  // put your code here
  Object.assign(userData, {
    id: userId,
  });
  return userData;
}

function addPropertyV3(userData, userId) {
  // put your code here
   const arr = {
     id: userId,
   };
  const Copy = Object.assign(userData, arr);
  return Copy;
}
console.log(addPropertyV3(user, '1234567'));
