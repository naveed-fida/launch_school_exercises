var first = +prompt("Enter the first number:"),
    second = +prompt("Enter the second number");

console.log(first + " + " + second + " = " + (first + second));
console.log(first + " - " + second + " = " + (first - second));
console.log(first + " * " + second + " = " + (first * second));
console.log(first + " / " + second + " = " + (Math.round(first / second)));
console.log(first + " % " + second + " = " + (first % second));
console.log(first + " power " + second + " = " + (Math.pow(first, second)));
