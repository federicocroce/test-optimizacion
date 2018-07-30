import React  from 'react';

// const components = {}; actions = {}

import Toast from '../Utilities/Toast'
import Spinner from '../Utilities/Spinner'

import Header from '../Generic/Header'
import AsidePersonalData from '../Generic/AsidePersonalData'
import MainRightSection from '../Generic/MainRightSection'
import Footer from '../Generic/Footer'


import actionsEstudies from '../../Actions/actionsEstudies'
import actionsExperiences from '../../Actions/actionsExperiences'
import actionsOwnProjects from '../../Actions/actionsOwnProjects'
import actionsPersonalData from '../../Actions/actionsPersonalData'
import actionsFooter from '../../Actions/actionsFooter'
import actionsLogin from '../../Actions/actionsLogin'
import actionsToast from '../../Actions/actionsToast'


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Parser from 'html-react-parser';
import classNames from 'classnames';


class MinCV extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            darkThem: this.props.darkThem,
            activeActions: false
        };
    }

    componentDidMount() {

        this.props.onAuthStateChanged();

        this.props.fetchEstudies();
        this.props.fetchExperiences();
        this.props.fetchOwnProjects();
        this.props.fetchPersonalData();
        this.props.fetchFooter();
    }



    render() {

        const props = this.props;

        const headerProps = {};

        headerProps.toogleAuth = () => {
            if (props.login.loginState) {
                props.signOut();
            }
            else {
                props.hadleAuth();
            }

        }


        const personalData = props.personalData;
        const footer = props.footer;



        const content = [
            props.experiences,
            props.ownProjects,
            props.estudies 
        ];

        const mainClass = classNames({
            'app-container': true,
            'dark-them': this.state.darkThem,
        });

        headerProps.loginClass = classNames({ 'icon-lock_open': true }, { 'icon-lock_outline': this.props.login.loginState });

        headerProps.setThem = () => {
            this.setState({ darkThem: !this.state.darkThem });
        };

        headerProps.setActiveMenu = () => {
            this.setState({ activeActions: !this.state.activeActions });
        };

        headerProps.setToast = props.setToast;


        props.experiences.createItem = this.props.createExperiences;
        props.experiences.removeItem = this.props.removeExperiences;

        props.ownProjects.createItem = this.props.createOwnProjects;
        props.ownProjects.removeItem = this.props.removeOwnProjects;

        props.estudies.createItem = this.props.createEstudies;
        props.estudies.removeItem = this.props.removeEstudies;



        return (

            <div className={mainClass}>

                <Toast messages={props.messages.list} />

                {props.loading.isLoading ? <Spinner /> : null}

                <Header headerProps={headerProps} state={this.state} />

                <main className="table">
                    <AsidePersonalData personalData={personalData} />
                    <MainRightSection content={content} />
                </main>

                <Footer footer={footer} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        estudies: state.estudies,
        experiences: state.experiences,
        ownProjects: state.ownProjects,
        personalData: state.personalData,
        footer: state.footer,
        login: state.login,
        messages: state.messages,
        loading: state.loading,
    };
}


const mapDispatchToProps = dispatch => {
    return {
        fetchEstudies() {
            actionsEstudies.fetchObjects(dispatch)
        },
        fetchExperiences() {
            actionsExperiences.fetchObjects(dispatch)
        },
        fetchOwnProjects() {
            actionsOwnProjects.fetchObjects(dispatch)
        },
        createExperiences() {
            actionsExperiences.createAutoID(dispatch)
        },
        removeExperiences(id) {
            actionsExperiences.removeItem(dispatch, id)
        },
        createOwnProjects() {
            actionsOwnProjects.createAutoID(dispatch)
        },
        removeOwnProjects(id) {
            actionsOwnProjects.removeItem(dispatch, id)
        },
        fetchPersonalData() {
            actionsPersonalData.fetchObjects(dispatch)
        },
        createEstudies() {
            actionsEstudies.createAutoID(dispatch)
        },
        removeEstudies(id) {
            actionsEstudies.removeItem(dispatch, id)
        },
        fetchFooter() {
            actionsFooter.fetchObjects(dispatch)
        },
        hadleAuth() {
            actionsLogin.hadleAuth(dispatch)
        },
        onAuthStateChanged() {
            actionsLogin.onAuthStateChanged(dispatch)
        },
        signOut() {
            actionsLogin.signOut(dispatch)
        },
        setToast(text) {
            actionsToast.setToast(dispatch, text)
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MinCV));
