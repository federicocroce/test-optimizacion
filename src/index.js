// import React from 'react';
// import ReactDOM from 'react-dom';


// import App from './App'


// import './Styles/Main/index.css';
// import './Assets/icons/style.css';

// // import {setFrameworkConfig, setframeworkIndexConfig} from './Config/frameworkConfig';

// import('./registerServiceWorker').then(module => module.default());


// ReactDOM.render(<App/>, document.getElementById('root'));










import React, {components} from 'react';
import ReactDOM from 'react-dom';


import './Styles/Main/index.css';
import './Assets/icons/style.css';

// import {setFrameworkConfig, setframeworkIndexConfig} from './Config/frameworkConfig';

import Index from './Components/Sections/Index';

// setFrameworkConfig();
// setframeworkIndexConfig();

import('./registerServiceWorker').then(module => module.default());

ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();


// import App from './App'

// setFrameworkConfig();

// ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
