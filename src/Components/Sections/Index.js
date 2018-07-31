import React from 'react';

import storeHistory from '../../Config/store';
import MinCV from './MinCV';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

const Index = () => {

  return (
    <Provider store={storeHistory.store}>
      <ConnectedRouter history={storeHistory.history}>
          <MinCV />      
      </ConnectedRouter>
    </Provider>
  )
}

export default Index;

