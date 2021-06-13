import Component from "../src/Component.js";


const TodoList = new Component({
  name: 'TodoList',

  state: {
    toDoList: [
      'something'
    ]
  },

  template: function (props = {}) {
    return (
      `<div class="container">
        <h1>ToDoList</h1>
        <form id="form_todo_list">
          <input id="input_todo" type="text" placeholder="Task"/>
          <button class="btn">Add</button>
        </form>
        <section class="todos">
          <ul class="todos__list">
            ${this.state.toDoList.map((todo, index) => `
              <li class="todos__item">${todo} <button class="btn btn_delete" data-id=${index}>X</button> </li>
            `).join('')}
          </ul>
        </section>
      </div>`
    )
  },

  componentWillMount: function () {
    this.addEventListener('submit', ev => {
      ev.preventDefault()
      const $elem = ev.target.querySelector('#input_todo')
      this.setState({
        toDoList: [...this.state.toDoList, $elem.value]
      })
    }, '#form_todo_list')

    this.addEventListener('click', ev => {
      const id = parseInt(ev.target.dataset.id)
      const newToDoList = this.state.toDoList.filter((_, index) => index !== id)
      this.setState({
        toDoList: newToDoList
      })
    }, '.btn_delete')
  }
})

export default TodoList