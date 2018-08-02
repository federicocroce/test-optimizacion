import React from 'react';

import actions from "../Actions/indexActions";
import setComponents from "../Components/indexComponents";
import config from "./indexConfig";
import functions from "./indexFunctions";

Object.assign(React, {
    functions: functions,
    components: {},
    actions: actions
});

const setFrameworkConfig = () => {
    console.log("setFrameworkConfig");
    setComponents();
}

// const setFrameworkConfig = () => {
//     Object.assign(React, {
//         // functions : functions,
//         components : components,
//         // actions: actions
//     });
// }

const setframeworkIndexConfig = () => {
    Object.assign(React, {
        config: config
    });
}

export {
    setFrameworkConfig,
    setframeworkIndexConfig
};


