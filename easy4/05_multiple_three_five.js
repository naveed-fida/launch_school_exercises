function multisum(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    if (i % 5 === 0 || i % 3 === 0) { sum += i; }
  }
  return sum;
}
