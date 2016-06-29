function isPalidrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

function isPalindromicNum(num) {
  return isPalidrome(num.toString());
}
