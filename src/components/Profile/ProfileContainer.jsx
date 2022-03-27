import React from 'react';
import Pofile from './Profile';
import {connect} from 'react-redux';
import {useMatch} from "react-router-dom";
import {Navigate} from 'react-router-dom';


import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
    
    componentDidMount(){
            //let userId = this.props.match ? this.props.match.params.userId : 22766;   
            let userId = this.props.match ? this.props.match.params.userId : this.props.userId;   
            this.props.getProfileThunkCreator(userId);
            this.props.getStatusThunkCreator(userId);
        }


    render() {
        return (
            <Pofile {...this.props} 
                    userId = {this.props.match ? this.props.match.params.userId : 22766} 
                    profile = {this.props.profile} 
                    status = {this.props.status} 
                    updateStatusThunkCreator = {this.props.updateStatusThunkCreator}
                    getStatusThunkCreator = {this.props.getStatusThunkCreator} />
        )
    }
    
}

//
const ProfileURLMatch = (props) => {
    let match = useMatch('/profile/:userId/');
    return <RedirectComponent {...props} match = {match} />;
  }


let mapStateToProps = (state) => ({ 
    profile:state.profile.profile,
    isAuth: state.auth.isAuth,
    status: state.profile.status,
    userId: state.userId
});


// Редирект
let RedirectComponent = (props) => {
    if(props.isAuth === false){ return <Navigate to={"/Login"}/> }
    return <ProfileContainer {...props}/>
};


export default connect( mapStateToProps, { getProfileThunkCreator, 
                                           getStatusThunkCreator, 
                                           updateStatusThunkCreator } )(ProfileURLMatch);