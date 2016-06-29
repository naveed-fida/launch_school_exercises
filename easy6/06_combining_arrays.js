function merge() {
  var args = Array.from(arguments),
      newArr = args.shift().slice(),
      mergedArr = [];

  args.forEach(function(arr) {
    newArr = newArr.concat(arr);
  });

  newArr.forEach(function(el) {
    if (!mergedArr.includes(el)) { mergedArr.push(el); }
  });
  return mergedArr;
}
