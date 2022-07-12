function uniqueCount(array) {
  if (array.length == 0) {
    return 0;
  }
  var unique_cnt = 1;
  var unique_flag = true;
  for (var i = 1; i < array.length; i++) {
    unique_flag = true;
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] == array[i]) {
        unique_flag = false;
      }
    }
    if (unique_flag) {
      unique_cnt++;
    }
  }
  return unique_cnt;
}
console.log(uniqueCount([1, 5, 3, 2, 4, 2, 5, 8, 5, 2, 4, 9, 7]));
