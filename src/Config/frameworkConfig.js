import React from 'react';

// import actions from "../Actions/indexActions";
import * as components from "../Components/indexComponents";
// import config from "./indexConfig";
// import functions from "./indexFunctions";


const setFrameworkConfig = () => {
    Object.assign(React, {
        // functions : functions,
        components,
        // actions: actions
    });
}

const setframeworkIndexConfig = () => {
    Object.assign(React, {
        // config: config
    });
}

export {
    setFrameworkConfig,
    setframeworkIndexConfig
};


