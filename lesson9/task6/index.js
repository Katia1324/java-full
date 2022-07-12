const obj = {
  room: [
    { name: "Jack" },
    { name: "Katia" },
    { name: "Valia" },
    { name: "Lev" },
  ],
  room1: [
    { name: "Olia" },
    { name: "Kirill" },
    { name: "Lesia" },
    { name: "Nastya" },
  ],
};

const getPeople = (obj) => {
  const copy = Object.values(obj);
  const objCopy = copy.reduce((acc, room) => acc.concat(room), []);

  const name = objCopy.map((objCopy) => objCopy.name);
  return name;
};
console.log(getPeople(obj));
