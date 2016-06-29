function center_of(str) {
  var str_arr = str.split(''),
      len = str_arr.length,
      half = Math.floor(len / 2);
      middle = [];

  if (len % 2 === 0) {
    middle.push(str_arr[half - 1]);
    middle.push(str_arr[half]);
  } else {
    middle.push(str_arr[half]);
  }
  return middle.join('');
}
