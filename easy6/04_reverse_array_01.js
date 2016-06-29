function reverse(arr) {
  var left_el;
  var right_el;
  for (var i = 0, len = arr.length; i < Math.floor(len / 2); i++) {
    left_el = arr[i];
    right_el = arr[len - i - 1];
    arr[i] = right_el;
    arr[len - i - 1] = left_el;
    console.log(len - i - 1);
  }
  return arr;
}
