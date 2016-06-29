function interleave(arr1, arr2) {
  var newArr = [];
  for (var i = 0, len = arr1.length; i < len; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}