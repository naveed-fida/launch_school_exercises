function sumOfSums(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr.slice(0, i+1).reduce(function(prev, curr) {
      return prev + curr;
    });
  }
  return total; 
}
