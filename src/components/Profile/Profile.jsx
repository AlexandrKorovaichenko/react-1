import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return(   
        <div>
          <ProfileInfo 
                       userId  = { props.userId } 
                       profile = { props.profile } 
                       status  = { props.status } 
                       updateStatusThunkCreator = { props.updateStatusThunkCreator }
                       getStatusThunkCreator    = { props.getStatusThunkCreator }
          />

          <MyPostsContainer/>
      </div>
    );
}

export default Profile;