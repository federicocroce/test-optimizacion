import React, { Component, components } from 'react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      comp: null
    }
  }

  async loadComponent(){
    console.log('Evento Click');
    this.setState({comp: <components.Test />})
  }
 
  render() {

    return (
      <div className="App">
        <header>
          <h1>CODE SPLITTING TEST</h1>
        </header>

        <p>
          ALGO DE TEXTO!!!!
        </p>

        <button onClick={()=> this.loadComponent()}>Click</button>

        {this.state.comp}

      </div>
    );
  }
}

export default App;
