/**
 * 功能是可以在dataObj对象中， 寻找用连续点符号的keyName属性
 */
export default function lookup (dataObj, keyName) {
  if (keyName.indexOf('.') != -1 && keyName != '.') {
    const keys = keyName.split('.');
    let temp = dataObj;
    for (var i = 0; i < keys.length; i++) {
      if (temp) {
        temp = temp[keys[i]];
      } else {
        return null;
      }
    }
    return temp;
  }
  return dataObj[keyName];
};