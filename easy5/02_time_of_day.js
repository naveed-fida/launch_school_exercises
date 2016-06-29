function mod(n, m) {
  return ((n % m) + m) % m;
}

function timeOfDay(delta_minutes) {
  var MINUTES_PER_HOUR = 60,
      HOURS_PER_DAY = 24,
      MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY,
      hours, minutes;

  delta_minutes = mod(delta_minutes, 24 * 60);
  hours = Math.floor(delta_minutes / 60);
  minutes = delta_minutes % 60;
  return hours + " : " + minutes;
}
