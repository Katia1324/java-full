function sortAsc(array) {
    
  const my = array.sort();
  return my;
}
console.log(sortAsc([1, 8, 6, 3, 4, 5, 9, 7, 2]));


function sortDesc(array) {
 
  const newArray2 = array.sort((a, b) => b - a); 
  return newArray2;
}
console.log(sortDesc([1, 8, 6, 3, 4, 5, 9, 7, 2]));  


