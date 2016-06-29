function stringToInt(str) {
  var digits = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
    '7': 7, '8': 8, '9': 9
  }
  var multiplier = 1;
  var num = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    num += multiplier * digits[str[i]]
    multiplier *= 10;
  }
  return num;
}

function stringToSignedInt(str) {
  var sign = "+";
  if (str.startsWith('-') || str.startsWith('+')) {
    sign = str[0];
    str = str.substr(1)
  }
  if (sign === '+') { return stringToInt(str); }
  return -stringToInt(str);
}
