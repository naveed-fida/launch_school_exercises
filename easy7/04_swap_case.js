function swapcase(str) {
  return str.split('').map(function(char) {
    if (char.match(/[A-Z]/)) { return char.toLowerCase(); }
    if (char.match(/[a-z]/)) { return char.toUpperCase(); }
    return char;
  }).join('');
}