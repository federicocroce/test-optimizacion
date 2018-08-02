
import actionsEstudies from "./actionsEstudies";
import actionsExperiences from "./actionsExperiences";
import actionsOwnProjects from "./actionsOwnProjects";
import actionsPersonalData from "./actionsPersonalData";
import actionsFooter from "./actionsFooter";
import actionsLogin from "./actionsLogin";
import actionsToast from "./actionsToast";
import actionsLoading from "./actionsLoading";


// import('./actionsEstudies').then(module => React.actions = module.default);

const actions = {    
    actionsEstudies,
    actionsExperiences,
    actionsOwnProjects,
    actionsPersonalData,
    actionsFooter,
    actionsLogin,
    actionsToast,
    actionsLoading
}

export default actions;