function halvsies(arr) {
  var first_length = Math.ceil(arr.length / 2),
      newArr = [],
      first_arr = [];
      second_arr = [];

  for (var i = 0; i < first_length; i++) {
    first_arr.push(arr[i]);
  }

  for (var i = first_length; i < arr.length; i++) {
    second_arr.push(arr[i])
  }
  return [first_arr, second_arr];
}
