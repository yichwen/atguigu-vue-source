
import parseTemplateToTokens from './parseTemplateToTokens';

window.SGG_TemplateEngine = {
  render (templateStr, data) {
    var tokens = parseTemplateToTokens(templateStr);
    console.log(tokens);
  }
};