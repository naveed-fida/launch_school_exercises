function sequence(num1, num2) {
  var series = [];
  var current = num2;
  for (var i = 0; i < num1; i++) {
    series.push(current);
    current += num2;
  }
  return series;
}