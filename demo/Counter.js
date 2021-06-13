import Component from "../src/Component.js";


const Counter = new Component({
  name: 'Counter',

  state: {
    counter: 0
  },

  template: function (props = {}) {
    return (
      `<div class="container">
        <h1>Counter</h1>
        <div class="counter__container">
           <div class="counter">${this.state.counter}</div>
          <button class="btn" id="add"> + </button>
          <button class="btn" id="subtraction"> - </button>
        </div>
      </div>`
    )
  },

  componentWillMount: function () {
    this.addEventListener('click', ev => {
      this.setState({ counter: this.state.counter + 1 })
    }, '#add')

    this.addEventListener('click', ev => {
      this.setState({ counter: this.state.counter - 1 })
    }, '#subtraction')
  }
})

export default Counter