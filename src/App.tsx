import * as React from 'react';
import Counter from './components/Counter';

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Counter initialCounter={5} />
    );
  }
}

export default App;
