import React from "react";
import { connect } from 'react-redux';
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
//import {RedirectComponent} from '../../hoc/RedirectComponent';

import { follow, 
         unfollow, 
         setCurrentPage,  
         setIsFetching,
         setButtonVisible,
         delButtonVisible,
         getUsersThunkCreator,
         followThunkCreator,
         unFollowThunkCreator} from "../../redux/users-reducer";
import { getCurrentPage, getFollowVisible, getIsFetchin, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";



class UsersContainer extends React.Component{  
    

    componentDidMount(){
        //debugger;
        this.props.setIsFetching(true);
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageCount);
    }


    onPageChanged = (pageNumber) => {
        //debugger;
        this.props.setIsFetching(true);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageCount);
    };


    render() {
        return  <>
                { this.props.isFetching ? <Preloader/> : null }
                <Users 

                      totalUsersCount = {this.props.totalUsersCount}
                      pageCount = {this.props.pageCount}
                      currentPage = {this.props.currentPage}
                      setCurrentPage = {this.props.setCurrentPage}
                      users = {this.props.users}
                      followVisible = {this.props.followVisible}
                      onPageChanged = {this.onPageChanged}
                      followThunkCreator = {this.props.followThunkCreator}
                      unFollowThunkCreator = {this.props.unFollowThunkCreator}
                      
                />
            </>  
    }

} // end class UsersContainer


//let mapStateToProps = (state) => {
//    return {
        //user:               state.user,
        //pageCount:          state.user.pageCount,
        //totalUsersCount:    state.user.totalUsersCount,
        //currentPage:        state.user.currentPage,
        //isFetching:         state.user.isFetching,
        //followVisible:      state.user.followVisible
//    }
//}


let mapStateToProps = (state) => {

    return {
        users:              getUsers(state),
        pageCount:          getPageSize(state),
        totalUsersCount:    getTotalUsersCount(state),
        currentPage:        getCurrentPage(state),
        isFetching:         getIsFetchin(state),
        followVisible:      getFollowVisible(state)
    }

}

//let newRedirectComponent = RedirectComponent(UsersContainer);

export default connect( mapStateToProps, { follow, unfollow, setCurrentPage, 
                                           setIsFetching, setButtonVisible, delButtonVisible,
                                           getUsersThunkCreator, followThunkCreator, unFollowThunkCreator} )(UsersContainer);

