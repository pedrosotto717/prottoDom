import Component from "../src/Component.js";
import { AppContext } from "./AppContext.js";


const reviewComponent = new Component({
  name: 'reviewComponent',

  useContext: AppContext.provider(),

  template: function (props = {}) {
    return (
      `<div class="review-component container">
        <h2>${this.context.input}</h2>
      </div>`
    )
  }
})

export default reviewComponent