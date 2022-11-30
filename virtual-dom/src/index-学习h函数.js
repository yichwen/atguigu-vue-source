import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h'

// 创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

// 创建虚拟节点
const myVnode1 = h('a', { 
  props: { 
    href: 'http://www.atguigu.com',
    target: '_blank'
  } 
}, '尚硅谷');

const myVnode2 = h('div', '我是一个盒子');

const myVnode3 = h('ul', [
  h('li', '牛奶'),
  h('li', '咖啡'),
  h('li', '可乐')
]);

// 让虚拟节点上树
const container = document.getElementById('container');
patch(container, myVnode3);

