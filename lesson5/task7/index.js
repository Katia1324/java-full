function sum(from, to) {
  return ((2 * from + (to + 1 - from - 1)) / 2) * (to + 1 - from);
}
console.log(sum(5, 10));
console.log(sum(11, 11));

/**
 * @param {number} firstFrom
 * @param {number} firstTo
 * @param {number} secondFrom
 * @param {number} secondTo
 * @return {boolean}
 */
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) <= (sum(secondFrom, secondTo))) {
    return false;
  }
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return true;
  }
}
console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 10, 11, 11));
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
