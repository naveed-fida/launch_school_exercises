function buy_fruit(gr_array) {
  var new_arr = [];
  gr_array.forEach(function(ar) {
    for (var i = 0; i < ar[1]; i++) {
      new_arr.push(ar[0]);
    }
  });
  return new_arr;
}