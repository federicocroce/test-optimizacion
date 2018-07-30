import React from 'react';

import fireStoreApp from '../Config/fireStore';

const collection = 'footer';



const actions = {};

actions.fetchObjects = dispatch => fireStoreApp.fetchObjects(collection, dispatch, 'FETCH_FOOTER');

export default actions;
