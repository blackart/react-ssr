import * as React from 'react';
import * as styles from './Counter.scss';
import cn from 'classnames';

let cx = cn.bind(styles);

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

        let className = cx(styles.text);

        return (
          <div>
              <h1 className={styles.text}>counter at: {this.state.counter}</h1>
              <button onClick={() => this.incrementCounter()} value={'+'}/>
          </div>
        );
    }
}

export default Counter;