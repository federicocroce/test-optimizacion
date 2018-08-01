import React, { Component } from 'react';

React.components = {};

const asyncComponent = (path, name) => {
    React.components[name] = class extends Component {
        state = {
            component: null
        }


        componentDidMount() {
            import(`${path}`).then(module => this.setState({ component: module.default }));
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;
