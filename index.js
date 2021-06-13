import DOM from './src/DOM.js'
import App from './demo/App.js'
import Router from './src/Router.js'
import Counter from './demo/Counter.js'
import TodoList from './demo/TodoList.js'
import Home from './demo/Home.js'

Router.load([
  { name: 'Counter', path: '/counter', handler: Counter },
  { name: 'To Do List', path: '/todolist', handler: TodoList },
  { name: 'Home', path: '/', handler: Home },
  { name: 'Home', path: '/home', handler: Home }
])

Router.init()

DOM.render(
  App.render(),
  "#root"
)