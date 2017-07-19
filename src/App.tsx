import * as React from 'react';
import AuthContainer from './containers/auth/AuthContainer';
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AuthContainer />
      </div>
    );
  }
}

export default App;
