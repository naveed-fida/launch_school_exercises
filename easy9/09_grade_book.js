function get_grade() {
  var scores = Array.from(arguments),
      average = Math.round(scores.reduce(function(p, c) {
        return p + c;
      }) / scores.length);

  if (average >= 90) {
    return "A";
  } else if (average < 90 && average >= 80) {
    return "B";
  } else if (average < 80 && average >= 70) {
    return "C"
  } else if (average < 70 && average >= 60) {
    return "D"
  } else if (average < 60) {
    return "F";
  }
}