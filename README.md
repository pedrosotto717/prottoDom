# prottoDom Library | Inspired in React.js and Vue.js
_Library with educational purposes and learning._
Recommended for small or medium projects.

### Example Component
_Counter.js_
```
import Component from "./prottoDom/Component.js";

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
```


### Example Router
```
// Import Router.js
import Router from './prottoDom/Router.js'

// Load the routes in the Router
Router.load([
  { name: 'Home', path: '/', handler: HomePage },
  { name: 'NotFound', path: '/not-found', handler: NotFound }
])

// Initialize the Router
Router.init();
```


### Example DOM
```
import DOM from './prottoDom/DOM.js'

// addEventListener
DOM.addEventListener('click', ev => {
  ev.preventDefault()
  ...
}, '.selector')
```

```

//renderAsNode, return a object HTMLElement
const $HTMLElement = DOM.renderAsNode(`
    <div class="container">
      <h1 class="container">Something</h1>
      <div>
        ...
      </div>
    </div>
`);

document.body.appendChild($HTMLElement)
```

## Projects that use 'prottoDom'

* Fiction web-app: [https://pedrosotto717.github.io/fiction/dist/](https://pedrosotto717.github.io/fiction/dist/)