import React from 'react';

import setComponents from "../Components/indexComponents";

// import actions from "../Actions/indexActions";
import * as components from "../Components/indexComponents";
// import config from "./indexConfig";
// import functions from "./indexFunctions";

Object.assign(React, {
    // functions: functions,
    components: {}
    // actions: actions
});

const setFrameworkConfig = () => {
    setComponents();
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


