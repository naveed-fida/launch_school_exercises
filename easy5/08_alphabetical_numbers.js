var number_words = ["zero", "one", "two", "three", "four", "five",
                    "six", "seven", "eight", "nine", "ten", "eleven",
                    "twelve", "thirteen", "fourteen", "fifteen",
                    "sixteen", "seventeen", "eighteen", "nineteen"];
function alphabeticNumSort(arr) {
  return arr.sort(function(a, b) {
    return number_words[a].charCodeAt(0) - number_words[b].charCodeAt(0);
  });
}
