function wordSizes(str) {
  var count = {};
  str.replace(/[^A-Za-z\s]/g, '').split(/\s+/).forEach(function(word) {
    if (word.length === 0) { return; }
    count[word.length] = count[word.length] || 0;
    count[word.length] += 1;
  });
  return count;
}
