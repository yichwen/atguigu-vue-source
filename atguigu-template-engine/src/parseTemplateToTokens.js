import Scanner from './scanner';
import nestTokens from './nestTokens';

export default function parseTemplateToTokens(templateStr) {
  var tokens = [];
  var scanner = new Scanner(templateStr);
  var words;
  while (!scanner.eos()) {
    words = scanner.scanUntil('{{');
    tokens.push(['text', removeSpaces(words)]);
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
  return nestTokens(tokens);
}

function removeSpaces (words) {
  let inTag = false;
  let newWords = '';
  for (var i = 0; i < words.length; i++) {
    let c = words[i];
    if (inTag || !(/\s/g.test(c))) {
      newWords += words[i];
    }
    if (c == '<') {
      inTag = true;
    }
    if (c == '>') {
      inTag = false;
    }
  }
  return newWords;
}