import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthDataThunkCreator, logOutThunkCreator} from "../../redux/auth-reducer";

//import {useMatch} from "react-router-dom";


class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.getAuthDataThunkCreator();
    }

    render(){
        //debugger;
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({ 
        isAuth: state.auth.isAuth,
        login: state.auth.login
    });

// в компоненту HeaderContainer в Пропсах придет то, что передали в MapState и MapDispatch 
export default connect( mapStateToProps, {getAuthDataThunkCreator, logOutThunkCreator} ) (HeaderContainer);
