import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Add />
        </header>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
