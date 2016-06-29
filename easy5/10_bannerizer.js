function printInBox(message) {
  var horizontal_rule = '+' + '-'.repeat(message.length + 2) + '+',
      empty_line = '|' + ' '.repeat(message.length + 2) + '|';

      console.log(horizontal_rule);
      console.log(empty_line);
      console.log('| ' + message + ' |');
      console.log(empty_line);
      console.log(horizontal_rule);
}
