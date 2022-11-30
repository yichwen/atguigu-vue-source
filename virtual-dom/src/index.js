import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h'

// 创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);
const container = document.getElementById('container');
const button = document.getElementById('btn');

// 创建虚拟节点
const vnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
]);

patch(container, vnode1);

// 创建虚拟节点
// key服务于最小量更新
// 如果没有key，底层逻辑会认为整列数据在更新，使其效率低
// 如果ul改为ol，底层将认为是两个不同的虚拟节点，就会使用暴力拆除插入新的节点
// 如果判定是同一个虚拟节点？答案是选择器相同且key相同
// 最小量更新指挥同层比较
const vnode2 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
]);

btn.onclick = function() {
  patch(vnode1, vnode2);
}

