/**
 * Register.js
 *
 * Allow user to register
 */
'use strict';
/**
 * ## Imports
 *
 * Redux
 */
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as authActions from "../reducers/auth/authActions";
import {Map} from "immutable";
import LoginRender from "../components/LoginRender";
import React from "react";

/**
 * The actions we need
 */

/**
 * Immutable
 */

/**
 *   LoginRender
 */

/**
 * The necessary React
 */

const {
    LOGIN,
    REGISTER,
    FORGOT_PASSWORD
} = require('../lib/constants').default;

/**
 * ## Redux boilerplate
 */
const actions = [
    authActions
];

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    const creators = Map()
        .merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject();

    return {
        actions: bindActionCreators(creators, dispatch),
        dispatch
    };
}

function buttonPressHandler(signup, username, email, password) {
    signup(username, email, password);
}

let Register = React.createClass({

    render() {

        let loginButtonText = 'Register';
        let onButtonPress = buttonPressHandler.bind(null,
            this.props.actions.signup,
            this.props.auth.form.fields.username,
            this.props.auth.form.fields.email,
            this.props.auth.form.fields.password
        );


        return (
            <LoginRender
                formType={ REGISTER }
                loginButtonText={ loginButtonText }
                onButtonPress={ onButtonPress }
                displayPasswordCheckbox={ true }
                leftMessageType={ FORGOT_PASSWORD }
                rightMessageType={ LOGIN }
                auth={ this.props.auth }
                global={ this.props.global }
            />

        );
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
