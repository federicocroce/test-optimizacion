import {config} from 'react';

const actions = {};

actions.hadleAuth = (dispatch) => config.fireStoreApp.hadleAuth(dispatch,'HANDLE-AUTH');
actions.onAuthStateChanged = (dispatch) => config.fireStoreApp.onAuthStateChanged(dispatch,'HANDLE-AUTH');
actions.signOut = (dispatch) => config.fireStoreApp.signOut(dispatch,'HANDLE-AUTH');

export default actions;
