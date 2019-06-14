import * as React from 'react';
import * as styles from './Counter.module.scss';

export interface CounterProps {
    initialCounter: number;
}

export interface CounterState {
    counter: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { counter: this.props.initialCounter};
    }

    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
          <div>
              <h1 className={styles.text}>counter at: {this.state.counter}</h1>
              <button onClick={() => this.incrementCounter()}>+</button>
          </div>
        );
    }
}

export default Counter;