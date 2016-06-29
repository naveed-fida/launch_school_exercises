function letter_case_count(str) {
  var count = { lowercase: 0, uppercase: 0, neither: 0 }
  str.split('').forEach(function(char) {
    if (char.match(/[A-Z]/)) { count.uppercase++; }
    if (char.match(/[a-z]/)) { count.lowercase++; }
    if (char.match(/[^A-Za-z]/)) { count.neither++; }
  });

  return count;
}