function dms(degrees_float) {
  var deg = String.fromCharCode(176),
      minutes_per_deg = 60,
      seconds_per_min = 60;
      seconds_per_deg = minutes_per_deg * seconds_per_min;

  var total_seconds = Math.round(degrees_float * seconds_per_deg),
      degrees = Math.floor(total_seconds / seconds_per_deg),
      remaining_secs = total_seconds % seconds_per_deg,
      minutes = Math.floor(remaining_secs / seconds_per_min),
      seconds = remaining_secs % seconds_per_min;

  return degrees + deg + minutes + "'" + seconds + '"';
}
