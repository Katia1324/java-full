const contacts = [
  {
    name: 'Tom',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Katia',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = (contacts, isAsc) => {
   if (!Array.isArray(contacts)) {
     return null;
   }
  const result = contacts.sort((a, b) => {
    if (isAsc === false) {
      return b.name.localeCompare(a.name);
    }
    else {
        return a.name.localeCompare(b.name);
    }
    });
  return result;
};
console.log(sortContacts(contacts, false));
