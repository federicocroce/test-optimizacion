// import React, { Component, components } from 'react';
import React, { Component } from 'react';

// import './Styles/Main/index.css';
// import './Assets/icons/style.css';

// import {setFrameworkConfig} from './Config/frameworkConfig';
// import {setFrameworkConfig} from './Config/frameworkConfig';
// import {setframeworkIndexConfig} from './Config/frameworkConfig';
// frameworkConfig();


// import MinCV from "./Components/Sections/MinCV";
// import Index from "./Components/Sections/Index";

// import ContentCard from "./Components/Generic/ContentCard";
// import MainRightSection from "./Components/Generic/MainRightSection";
// import AsidePersonalData from "./Components/Generic/AsidePersonalData";
// import Footer from "./Components/Generic/Footer";
// import Header from "./Components/Generic/Header";


// import Toast from "./Components/Utilities/Toast";
// import Spinner from "./Components/Utilities/Spinner";


class App extends Component {

  componentWillMount(){
    // setFrameworkConfig();
    // setframeworkIndexConfig();
  }

 
  render() {

    const testToast = [
      {
        text: 'Fede'
      }
    ]
    return (
      <div className="App">
        <header className="App-header">

          {/* <Toast messages={testToast} /> */}
           {/* <components.Toast messages={testToast} />  */}

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> con el frame sin config
        </p>
      </div>
    );
  }
}

export default App;
