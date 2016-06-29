function century(year) {
  var century = Math.floor(year / 100) + 1;
  if (year % 100 === 0) { century -= 1 }
  return century + centurySuffix(century); 
}

function centurySuffix(century) {
  var suffix = 'th',
      last_digit = century %10;

  if ([11, 12, 13].includes(century % 100)) { return suffix; }

  if (last_digit === 1) { suffix = 'st'; }
  if (last_digit === 2) { suffix = 'nd'; }
  if (last_digit === 3) { suffix = 'rd'; }
  return suffix;
}
