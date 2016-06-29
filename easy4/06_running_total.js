function runningTotal(arr) {
  total = 0;
  return arr.map(function(num) {
    return total += num; 
  });
}
