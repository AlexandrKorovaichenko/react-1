import React from "react";
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

export const RedirectComponent = (Component) => {
    
    class RedirectComponent extends React.Component {

        render() {
            if(!this.props.isAuth) return <Navigate to="/login" />
            return <Component {...this.props} />
        }

    }

    let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectRedirectComponent;

};


let mapStateToPropsForRedirect = (store) => {
    return {
        isAuth: store.auth.isAuth
    }
} 


//export default RedirectComponent;