import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { reducerEstudies as estudies } from './reducerEstudies';
import { reducerOwnProjects as ownProjects } from './reducerOwnProjects';
import { reducerExperiences as experiences } from './reducerExperiences';
import { reducerPersonalData as personalData } from './reducerPersonalData';
import { reducerFooter as footer } from './reducerFooter';
import { reducerLogin as login } from './reducerLogin';
import { reducerMessages as messages } from './reducerMessages';
import { reducerLoading as loading } from './reducerLoading';


const allReducers = {
    experiences,
    estudies,
    ownProjects,
    personalData,
    footer,
    login,
    messages,
    loading,
    router: routerReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
