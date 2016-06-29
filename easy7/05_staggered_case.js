function staggered_case(str) {
  var str_arr = str.toLowerCase().split('');
  
  for(var i = 0, len = str.length; i < len; i += 2) {
    str_arr[i] = str_arr[i].toUpperCase();
  }
  return str_arr.join('');
}