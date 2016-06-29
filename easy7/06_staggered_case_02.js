function staggered_case(str) {
  var caps = false,
      str_arr = str.toLowerCase().split('');

  for (var i = 0, len = str_arr.length; i < len; i++) {
    if (str_arr[i].match(/[a-z]/)) { caps = !caps; }
    if (caps) { str_arr[i] = str_arr[i].toUpperCase(); }
  }
  return str_arr.join('');
}
