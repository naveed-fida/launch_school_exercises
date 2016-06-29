function substr_at_start(str) {
  var substrings = [];
  for (var i = 1; i <= str.length; i++) {
    substrings.push(str.substr(0, i));
  }
  return substrings;
}

function substrings(str) {
  var substrings = [];
  for (var i = 0; i < str.length; i++) {
    substrings = substrings.concat(substr_at_start(str.substr(i)));
  }
  return substrings;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('') && str.length > 1;
}

function palindromes(str) {
  var palindromes = [],
      all_substrings = substrings(str);

  all_substrings.forEach(function(str) {
    if (isPalindrome(str)) { palindromes.push(str); }
  });
  return palindromes;
}
