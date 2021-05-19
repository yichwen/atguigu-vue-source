import lookup from './lookup';
import renderTemplate from './renderTemplate';
/**
 * token is ['#', 'students', [...]]
 */
export default function parseArray (token, data) {
  const v = lookup(data, token[1]);
  let resultStr = '';
  for (var j = 0; j < v.length; j++) {
    resultStr += renderTemplate(token[2], {
      ...v[j],
      '.': v[j]
    });
  }
  return resultStr;
}