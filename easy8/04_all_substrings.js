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
