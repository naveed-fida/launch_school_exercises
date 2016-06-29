function fibIndexbyLength(number_length) {
  var first = 1,
      second = 1,
      index = 2;

  while(true) {
    var fibonacci = first + second;
    index += 1;

    if (String(fibonacci).length === number_length) { break; }
    first = second;
    second = fibonacci;
  }
  console.log(fibonacci);
  return index;
}
