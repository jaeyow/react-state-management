import React from 'react';

function Container (props) {
  console.log(`Container: ${props.appState.count}`)
  return (
    <Counter appState={props.appState} />
  );
};

function Counter (props) {
    return (
      <div>
        <p>
          Clicked: {props.appState.count} times
          {' '}
          <button onClick={props.appState.increment}>
            +
          </button>
          {' '}
          <button onClick={props.appState.decrement}>
            -
          </button>
          {' '}
          <button onClick={props.appState.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button  onClick={props.appState.incrementAsync}>
            Increment async
          </button>
        </p>
      </div>
    );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  incrementIfOdd = () => {
		if (this.state.count % 2 !== 0) {
			this.increment();
		}
	};

	incrementAsync = () => {
		setTimeout(this.increment, 1000)
  };
  
  render () {
    
    return(
      <Container appState={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement,
        incrementIfOdd: this.incrementIfOdd,
        incrementAsync: this.incrementAsync,
      }} />
    );
  };
};
