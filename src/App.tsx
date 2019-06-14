import * as React from 'react';
import Router from "./components/Router";

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
        <Router/>
    );
  }
}

export default App;
