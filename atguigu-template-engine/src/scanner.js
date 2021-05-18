/**
 * Scanner
 */

export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr;
    // pointer
    this.pos = 0;
    this.tail = templateStr;
  }

  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += tag.length;
      this.tail = this.tail.substring(tag.length);
    }
  }

  scanUntil(stopTag) {
    const start = this.pos;
    // 当尾巴的开头不是stopTag的时候，就说明还没有扫描到stopTag
    while(!this.eos() && this.tail.indexOf(stopTag) != 0) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(start, this.pos);
  }

  eos() {
    return this.pos >= this.templateStr.length;
  }

};