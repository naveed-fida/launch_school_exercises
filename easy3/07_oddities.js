function oddities(arr) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
