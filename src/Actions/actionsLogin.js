import React from 'react';

import fireStoreApp from '../Config/fireStore';

const actions = {};

actions.hadleAuth = (dispatch) => fireStoreApp.hadleAuth(dispatch,'HANDLE-AUTH');
actions.onAuthStateChanged = (dispatch) => fireStoreApp.onAuthStateChanged(dispatch,'HANDLE-AUTH');
actions.signOut = (dispatch) => fireStoreApp.signOut(dispatch,'HANDLE-AUTH');

export default actions;
