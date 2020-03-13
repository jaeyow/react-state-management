import {observable, action} from 'mobx';

export default class CounterStore {
	@observable counter = 0;

	increment = () => {
		this.counter = this.counter + 1;
	};

	decrement = () => {
		this.counter = this.counter - 1;
	}

	incrementIfOdd = () => {
		if (this.counter % 2 !== 0) {
			this.increment();
		}
	  }

	  incrementAsync = () => {
		setTimeout(this.increment, 1000)
	  }
}