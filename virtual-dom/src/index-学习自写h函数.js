import h from './my-snabbdom/h';

// testing
const vnode = h('div', {}, [
  h('p', {}, '哈哈'),
  h('p', {}, '嘻嘻'),
  h('p', {}, '呵呵'),
  h('p', {}, h('span', {}, 'hello'))
]);

console.log(vnode);

const vnode2 = h('ul', {}, [
  h('li', {}, '牛奶'),
  h('li', {}, '咖啡'),
  h('li', {}, '可乐')
]);

console.log(vnode2);