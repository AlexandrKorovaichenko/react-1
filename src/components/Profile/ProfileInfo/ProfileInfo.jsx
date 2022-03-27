import React from 'react';
import classProfileInfo from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import Status from "./Status"


const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader />
  }

  return (

    <div className={classProfileInfo.info}>

      {/*<div>
        <img alt="" src="https://www.fao.org/uploads/pics/Corals_03.jpg" />
      </div>*/}

      <div>  
          <img alt = {props.profile.fullName ? props.profile.fullName : ""} src = {props.profile.photos.large} />
          
          <Status status = { props.status } 
                  userId = { props.userId } 
                  updateStatusThunkCreator = { props.updateStatusThunkCreator }
                  getStatusThunkCreator = { props.getStatusThunkCreator }
                  
                />
          
      </div>

    </div>

  );
}

export default ProfileInfo; 