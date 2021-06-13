import Context from '../src/Context.js'

const AppContext = Context.create({
  name: 'AppContext',
  state: {
    input: 'something'
  }
});

export { AppContext }