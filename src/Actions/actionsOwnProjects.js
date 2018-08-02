import {config} from 'react';

const collection = 'ownProjects';

const actions = {};

const document = {
    details:{
        id: 0,
        beginDate: "2018",
        endDate: "actualmente",
        content:[
            'asd',
            'mas asd'
        ],
        institution: 'Sarasa',
        title: 'nuevo develop',
        link: 'www.google.com'
    }
}

actions.fetchObjects = dispatch => config.fireStoreApp.fetchObjects(collection, dispatch, 'FETCH_OWN_PROJECTS');
actions.createAutoID = dispatch => config.fireStoreApp.createAutoID(dispatch, collection, document);
actions.removeItem = (dispatch, id) => config.fireStoreApp.removeItem(dispatch, collection, id);

export default actions;
