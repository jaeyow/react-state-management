import React from 'react';
import logo from './logo.svg';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
  render () {
    const { counterStore } = this.props;
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
  }
}
