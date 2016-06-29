function multiply_all_pairs(arr1, arr2) {
  var result = [];
  arr1.forEach(function(el1) {
    arr2.forEach(function(el2) {
      result.push(el1 * el2);
    });
  });
  return result.sort(function(a, b) {
    return a - b;
  });
}