import Vue from 'vue';
import comp from '@/components/Ptest.vue';

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();
  return vm.$el;
}

describe('comp.vue', () => {
  it('должна быть корректная строка таблицы', () => {
    const data = mountComponentWithProps(comp, {item: { s: 'abc', p: 'abc', result: 'true' }});
    expect(data.textContent).toEqual('abc abc true');
  });
});