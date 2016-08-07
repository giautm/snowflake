/**
 * # Logout.js
 *
 *
 *
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
import * as globalActions from "../reducers/global/globalActions";
import {Map} from "immutable";
import Header from "../components/Header";
import FormButton from "../components/FormButton";
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";


/**
 * The actions we need
 */

/**
 * Immutable
 */

/**
 * The Header will display a Image and support Hot Loading
 */
/**
 * The FormButton will change it's text between the 4 states as necessary
 */

/**
 * The necessary React components
 */

/**
 * ## Styles
 */
var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    }
});
/**
 * ## Redux boilerplate
 */
const actions = [
    authActions,
    globalActions
];

function mapStateToProps(state) {
    return {
        ...state
    }
};

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

class Logout extends Component {

    /**
     * ### render
     * Setup some default presentations and render
     */
    render() {

        let self = this;

        let onButtonPress = () => {
            this.props.actions.logout();
        };

        return (
            <View style={styles.container}>
                <View>
                    <Header isFetching={this.props.auth.form.isFetching}
                            showState={this.props.global.showState}
                            currentState={this.props.global.currentState}
                            onGetState={this.props.actions.getState}
                            onSetState={this.props.actions.setState}
                    />
                    <FormButton
                        isDisabled={!this.props.auth.form.isValid || this.props.auth.form.isFetching}
                        onPress={onButtonPress.bind(self)}
                        buttonText={'Log out'}/>
                </View>
            </View>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
