function removeDuplicates(array) {
  const uniqSet = new Set(array);
  return [...uniqSet];
}

console.log(removeDuplicates([1, 5, 6, 1, 9, 7, 7, 7, 5, 2]));
