String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1); 
};

function word_cap(str) {
  return str.split(' ').map(function(word) {
    return word.capitalize();
  }).join(' ');
}
