function multiplicative_average(arr) {
  var product = 1;
  arr.forEach(function(el) {
    product *= el;
  });
  return Math.round(product / arr.length);
}