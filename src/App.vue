<template>
  <div id="app">
    <div class="container"><!-- центровка и адаптивные размеры под различные экраны -->
      <h3 class='pt-3'>Тестирование строк</h3>
      <form>
        <div class="form-group">
          <label for='s'>s:</label>
          <input name='s' v-model="s" placeholder="string" class="form-control">
        </div>
        <div class="form-group">
          <label for='p'>p:</label>
          <input name='p' v-model="p" placeholder="pattern" class="form-control">
        </div>
        <div class="form-group">
          <button v-on:click.prevent="testString" class='btn btn-outline-primary btn-sm'>Проверить</button><!-- Вызов метода test из app. Действие по-умолчанию при нажатии кнопки отменено -->
        </div>
      </form>

      <div class='pt-3'>
        <table class="table table-striped table-hover"><!-- таблица, строки разделены линиями, при наведении подсвечивать -->
          <thead>
            <tr class='thead-dark'>
              <th>s</th>
              <th>p</th>
              <th>Результат</th>
            </tr>
          </thead>

          <tbody>
            <!-- отрисовка компонента ptest, являющегося строкой таблицы, содержащей результаты прошедших тестов -->
            <tr
              is='Ptest'
              v-for="(item, index) in tests"
              v-bind:key="index"
              v-bind:item="item"
            ></tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Ptest from './components/Ptest'

export default {
  name: 'App',
  components: {
    Ptest
  },
  data: function () {
    return {
      s: '',
      p: '',
      tests: []
    }
  },
  methods: {
    testString: function () {
      const currentTest = {
        s: this.s,
        p: this.p,
        result: ''
      }
      if (currentTest.s.match(/[^a-z]/)) { // валидация данных
        currentTest.result = 'ошибка в s'
      } else if (currentTest.p.match(/[^a-z?*]/)) {
        currentTest.result = 'ошибка в p'
      } else {
        // данные ок
        // создадим из паттерна введенного пользователем паттерн регулярного выражения
        let pattern = currentTest.p
        pattern = pattern.replace(/\?/g, '.')
        pattern = pattern.replace(/\*/g, '.*?')
        const reg = new RegExp('^' + pattern + '$')

        currentTest.result = reg.test(currentTest.s)
      }
      
      this.tests.push(currentTest) // запись в массив (после чего происходит соответсвующая реакция в интерфейсе)
      
      this.s = ''
      this.p = ''
    }
  }
}
</script>
