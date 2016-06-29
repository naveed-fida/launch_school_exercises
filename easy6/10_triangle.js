function triangle(num) {
  spaces = num - 1;
  stars = 1;
  for (var i = 0; i < num; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(stars));
    spaces--;
    stars++;
  }
}