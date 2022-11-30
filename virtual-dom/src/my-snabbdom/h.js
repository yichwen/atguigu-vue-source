import vnode from './vnode';

// 编写一个低配版本的h函数，这个函数必须接受3个参数，缺一不可
// 相当于它的重载功能较弱

// h('div', {}, 'text')
// h('div', {}, [])
// h('div', {}, h())    // h函数将返回对象
export default function (sel, data, c) {

  if (arguments.length != 3) {
    throw new Error('对不起，h函数必须传入3个参数，我们是低配版');
  }

  if (typeof c === 'string' || typeof c === 'number') {
    // format 1
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    // format 2
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('传入的数组参数中有项不是h函数');
      }
      children.push(c[i]);
    }
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    // format 3
    return vnode(sel, data, [c], undefined, undefined);
  } else {
    throw new Error('传入的第三个参数类型不对');
  }

}