const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

const copy = arr.slice();

return copy.map(function(e) {
    if (e % 2 === 0) { 
	return (e + delta)}  
    else return e
});

}
const arr = [2, 5, 6, 8, 11, 9, 4];
let delta = 20;

console.log(increaseEvenEl(arr, delta));
