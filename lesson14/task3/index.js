let num = 0;

export function add(a) {
  num = num + a;
}
export function decrease(b) {
  num = num - b;
}
export function reset() {
  num = 0;
}
export function getMemo() {
  return num;
}
