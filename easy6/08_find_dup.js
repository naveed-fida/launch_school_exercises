function findDup(arr) {
  return arr.find(function(el) {
    return arr.indexOf(el) !== arr.lastIndexOf(el);
  });
}