function isLeapYear(year) {
  if (year % 4 === 0 && year < 1752) {
    return true; 
  } else if (year % 400 === 0) {
    return true
  } else if (year % 100 === 0) {
    leap = false
  }
  return year % 4 === 0;
}

