import React, { Component, components, config } from 'react';
// import React, { Component, config } from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
// // import { Switch, Route, NavLink } from 'react-router-dom';

import { setFrameworkConfig, setframeworkIndexConfig } from '../../Config/frameworkConfig';

// import MinCV from './MinCV'

class Index extends Component {

  componentWillMount() {
    setFrameworkConfig();
    setframeworkIndexConfig();
  }


  render() {

    // const testToast = [
    //   {
    //     text: 'Fede'
    //   }
    // ]
    return (
      <Provider store={config.storeHistory.store}>
        <ConnectedRouter history={config.storeHistory.history}>
          {/* <MinCV /> */}
          <div>
            <h1>ALGO</h1>
            <components.MinCV />
          </div>

          {/* <h1>Fede</h1> */}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Index;
























// import React, {components, config} from 'react';

// import { Provider } from "react-redux";
// import { ConnectedRouter } from "react-router-redux";
// // import { Switch, Route, NavLink } from 'react-router-dom';

// import MinCV from './MinCV'
// // import App from './App'

// const Index = () => {

//   return (
//     <Provider store={config.storeHistory.store}>
//       <ConnectedRouter history={config.storeHistory.history}>
//       <MinCV />
//           {/* <components.MinCV />       */}
//           {/* <h1>Fede</h1> */}
//       </ConnectedRouter>
//     </Provider>
//   )
// }

// export default Index;

