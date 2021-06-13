import Component from "../src/Component.js";
import InputComponent from "./InputComponent.js";
import reviewComponent from "./reviewComponent.js";


const Home = new Component({
  name: 'Home',

  state: {
    Home: 0
  },

  template: function (props = {}) {
    return (
      `<div class="container">
        <h1>Cross Communication Between Components</h1>
        ${InputComponent.render()}
        ${reviewComponent.render()}
      </div>`
    )
  }
})

export default Home