import React, {
  useState,
  useContext
} from 'react';

const AppContext = React.createContext();

function Container() {
  const {
    counter
  } = useContext(AppContext); // consume context in functional component

  console.log(`Container: ${counter}`)
  return (
    <Counter />
  );
};

function AppProvider(props) {
  const [counter, setCount] = useState(0);

  var increment = () => {
    setCount(counter + 1);
  };

  var decrement = () => {
    setCount(counter - 1);
  }

  var incrementIfOdd = () => {
    if (counter % 2 !== 0) {
      increment();
    }
  }

  var incrementAsync = () => {
    setTimeout(increment, 1000);
  }

  const value = {
    counter,
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync
  }
  return (
  <AppContext.Provider value={value}>
    { props.children }
  </AppContext.Provider>
  );
}

class Counter extends React.Component {

  static contextType = AppContext; // consume context in class based component
  render() {
    var value = this.context;
    return (
      <div>
        <p>
          Clicked: {value.counter} times
          {' '}
          <button onClick={value.increment}>
            +
          </button>
          {' '}
          <button onClick={value.decrement}>
            -
          </button>
          {' '}
          <button onClick={value.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button  onClick={value.incrementAsync}>
            Increment async
          </button>
        </p>
      </div>
    );
  }

  // consume context in functional component
  // const {
  //     counter,
  //     increment,
  //     decrement,
  //     incrementIfOdd,
  //     incrementAsync
  //   } = useContext(AppContext);
  
  //   return (
  //     <div>
  //       <p>
  //         Clicked: {counter} times
  //         {' '}
  //         <button onClick={increment}>
  //           +
  //         </button>
  //         {' '}
  //         <button onClick={decrement}>
  //           -
  //         </button>
  //         {' '}
  //         <button onClick={incrementIfOdd}>
  //           Increment if odd
  //         </button>
  //         {' '}
  //         <button  onClick={incrementAsync}>
  //           Increment async
  //         </button>
  //       </p>
  //     </div>
  //   );
}
          
export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
          <Container />
      </AppProvider>
    );
  }
}