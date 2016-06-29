function multiply_lists(arr1, arr2) {
  return arr1.map(function(el, idx) {
    return el * arr2[idx];
  });
}
