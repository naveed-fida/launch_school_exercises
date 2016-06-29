function crunch(str) {
  return str.replace(/(.)\1{1,}/g, "$1");
}
