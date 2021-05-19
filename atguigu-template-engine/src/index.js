import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';

window.SGG_TemplateEngine = {
  render (templateStr, data) {
    // 调用parseTemplateToTokens函数，让模板字符串变为tokens数组
    var tokens = parseTemplateToTokens(templateStr);
    // 调用renderTemplate函数，让tokens数组变为dom字符串
    var domStr = renderTemplate(tokens, data);
    return domStr;
  }
};