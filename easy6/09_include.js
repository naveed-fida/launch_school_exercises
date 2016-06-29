function includes(arr, item) {
  return arr.some(function(el) {
    return el === item
  });
}
