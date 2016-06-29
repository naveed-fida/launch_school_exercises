function reverse(arr) {
  var new_arr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    new_arr[i] = arr[len - i - 1]
  }
  return new_arr;
}
