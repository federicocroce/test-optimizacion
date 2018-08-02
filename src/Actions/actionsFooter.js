import {config} from 'react';

const collection = 'footer';

const actions = {};

actions.fetchObjects = dispatch => config.fireStoreApp.fetchObjects(collection, dispatch, 'FETCH_FOOTER');

export default actions;
