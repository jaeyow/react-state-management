import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import './index.css';


const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <App/>,
  rootEl
)

render()
store.subscribe(render)

function App (props) {
  return (
    <Container/>
  );
};

function Container (props) {
  return (
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
  );
};

