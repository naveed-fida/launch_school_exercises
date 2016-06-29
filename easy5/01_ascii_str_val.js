function asciiValue(str) {
  var value = 0;
  for (var i = 0; i < str.length; i++) {
    value += str.charCodeAt(i);
  }
  return value;
}
