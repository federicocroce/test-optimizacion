import React from 'react';
// import {components} from 'react';
import ReactDOM from 'react-dom';


import './Styles/Main/index.css';
import './Assets/icons/style.css';


// import {setFrameworkConfig} from './Config/frameworkConfig';


import registerServiceWorker from './registerServiceWorker';

// frameworkConfig();
// ReactDOM.render(<components.Index />, document.getElementById('root'));
// registerServiceWorker();

// import App from './App'
import Index from './Components/Sections/Index'


// const firebase = require("firebase/app");

// var config = {
//     apiKey: "AIzaSyDINSbmIwTdqRE7yDhkow46fs3JxW5y8KM",
//     authDomain: "test-74eeb.firebaseapp.com",
//     databaseURL: "https://test-74eeb.firebaseio.com",
//     projectId: "test-74eeb",
//     storageBucket: "test-74eeb.appspot.com",
//     messagingSenderId: "984496005171"
//   };
  
//   firebase.initializeApp(config);



// setFrameworkConfig();

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
