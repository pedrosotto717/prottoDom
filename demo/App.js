import Component from "../src/Component.js";
import Router from "../src/Router.js";


const App = new Component({
  name: "App",

  state: {
    handler: null,
  },

  template: function () {
    return (`
        <nav>
          <ul class="menu">
            <li class="menu__item">
              <a href="#/home" class="menu__link">Home</a>
            </li>
            <li class="menu__item">
              <a href="#/counter" class="menu__link">Counter</a>
            </li>
            <li class="menu__item">
              <a href="#/todolist" class="menu__link">Todo List</a>
            </li>
          </ul>
        </nav>

      ${this.state.handler
        ? `
        <section class="main-content">
          ${this.state.handler.render()}
        </section>
        `
        : ''}
    `)
  },

  componentWillMount: function () {
    Router.subscribe((args) => {
      this.setState({ handler: args.handler })
      document.documentElement.querySelector('title').innerText = args.name
    })
  }
})

export default App