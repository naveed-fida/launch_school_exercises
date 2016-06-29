function repeater(str) {
  return str.replace(/(.)/g, '$1$1');
}