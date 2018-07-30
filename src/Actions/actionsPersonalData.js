import React from 'react';
import fireStoreApp from '../Config/fireStore';

const collection = 'personalData';

const actions = {};

actions.fetchObjects = dispatch => fireStoreApp.fetchObjects(collection, dispatch, 'FETCH_PERSONAL_DATA');

export default actions;
