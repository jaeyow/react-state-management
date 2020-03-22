import React, {createContext} from 'react';
import { observer, Provider } from 'mobx-react';
import CounterStore from './counterStore';

export default class App extends React.Component {
  render () {
    return (
      <Provider counterStore={new CounterStore()}>
        <Container/>
      </Provider>
    );
  }
}

const CounterContext = createContext(new CounterStore())

function useStore() {
  return React.useContext(CounterContext)
}

const Container = () => {
  return (
    <Counter />
  );
}

const Counter = observer(() => {
    const counterStore = useStore();
    return (
      <div>
        <p>
          Clicked: {counterStore.counter} times
          {' '}
          <button onClick={counterStore.increment}>
            +
          </button>
          {' '}
          <button onClick={counterStore.decrement}>
            -
          </button>
          {' '}
          <button onClick={counterStore.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button  onClick={counterStore.incrementAsync}>
            Increment async
          </button>
        </p>
      </div>
    );
});

