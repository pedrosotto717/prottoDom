import Component from "../src/Component.js";
import { AppContext } from "./AppContext.js";


const InputComponent = new Component({
  name: 'InputComponent',

  useContext: AppContext.provider(),

  template: function (props = {}) {
    return (
      `<div class="input-component">
        <input type="text" id="input_share" value="something"/>
      </div>`
    )
  },

  componentWillMount: function () {
    console.log("HERE ")

    document.addEventListener('keyup', ev => {
      this.pushContext({ input: ev.target.value })
    })
  }

})

export default InputComponent