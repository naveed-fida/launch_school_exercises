function isDouble(num) {
  var num_str = String(num);
  var half = Math.round(num_str.length / 2);
  return num_str.length % 2 === 0 && num_str.substr(0, half) === num_str.substr(half);
}

function twice(num) {
  if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}
