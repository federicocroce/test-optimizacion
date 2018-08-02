import React, { Component} from 'react';

class App extends Component {
 
  render() {

    const testToast = [
      {
        text: 'Fede'
      }
    ]
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> con firebase
        </p>
      </div>
    );
  }
}

export default App;
