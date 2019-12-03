import Vue from "vue";
import myComp from '@/App.vue'

it('проверка вывода по-умолчанию', () => {
  const vm = new Vue(myComp).$mount();
  expect(vm.$el.textContent).toContain('Тестирование строк s:  p:  Проверить s p Результат');
}),

describe('App.vue - проверка обработки строк паттерном', () => {
  
  it('1', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = 'aa';
    vm.p = 'a';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('false')
    })
  }),
  it('2', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = 'aa';
    vm.p = '*';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('true')
    })
  }),
  it('3', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = 'cb';
    vm.p = '?a';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('false')
    })
  }),
  it('4', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = 'adceb';
    vm.p = '*a*b';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('true')
    })
  }),
  it('5', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = 'acdcb';
    vm.p = 'a*c?b';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('false')
    })
  }),
  it('6', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = '';
    vm.p = '';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('true')
    })
  }),
  it('7', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = '';
    vm.p = 'a';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('false')
    })
  }),
  it('8', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = 'a';
    vm.p = '';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('false')
    })
  }),
  it('9', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = '5';
    vm.p = '';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('ошибка в s')
    })
  }),
  it('10', () => {
    const vm = new Vue(myComp).$mount();
    vm.s = '';
    vm.p = 'й';
    vm.testString();
    vm.$nextTick(() => {
      const tableBody = vm.$el.getElementsByTagName('tbody');
      expect(tableBody.item(0).firstChild.lastChild.textContent).toContain('ошибка в p')
    })
  })
})