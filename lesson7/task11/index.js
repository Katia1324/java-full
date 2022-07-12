function filterNames(arr, text) {
  const result = arr.filter((name) => name.length > 5 && name.includes(text));
  return result;
}

console.log(
  filterNames(['Oleksii', 'Johnay', 'Ann', 'Mike', 'Olivya', 'Katiya'], 'ya')
);
