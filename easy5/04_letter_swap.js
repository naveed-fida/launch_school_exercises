function swap(phrase) {
  return phrase.split(' ').map(function(word) {
    return (word.length === 1) ? word : word[word.length - 1] +
                                        word.slice(1, -1) + word[0];
  }).join(' ');
}