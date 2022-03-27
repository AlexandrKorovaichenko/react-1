//import React from 'react';
import MyPost from './MyPosts';
import { connect } from 'react-redux';
import {addPostActionCreator} from '../../../redux/profile-reducer';

  
let mapStateToProps = (store) => {
  
 //debugger;

  return {
    profile: store.profile
  }

}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => { dispatch( addPostActionCreator(postText) ) }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)( MyPost );

export default MyPostsContainer; 