function word_lengths(str) {
  return str.split(' ').map(function(word) {
    return word + ' ' + word.length;
  });
}