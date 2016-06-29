function intToStr(int) {
  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      remainder, str = '';

  do {
    remainder = int % 10;
    int = Math.floor(int / 10);
    str = digits[remainder] + str;
  } while (int > 0)
  return str;
}

function signedIntToStr(int) {
  if (int < 0) {
    return "-" + intToStr(-int);
  } else {
    return "+" + intToStr(int);
  }
}