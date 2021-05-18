import Scanner from './scanner';

export default function parseTemplateToTokens(templateStr) {
  var tokens = [];
  var scanner = new Scanner(templateStr);
  var words;
  while (!scanner.eos()) {
    words = scanner.scanUntil('{{');
    tokens.push(['text', words]);
    scanner.scan('{{');
    words = scanner.scanUntil('}}');
    if (words) {
      if (words[0] === '#') {
        tokens.push(['#', words.substring(1)]);
      } else if (words[0] === '/') {
        tokens.push(['/', words.substring(1)]);
      } else {
        tokens.push(['name', words]);
      }
    }
    scanner.scan('}}');
  }
  return tokens;
}