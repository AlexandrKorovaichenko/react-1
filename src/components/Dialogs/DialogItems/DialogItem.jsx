import React from 'react';
import classDialog from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  // className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }
  // return <div className={classDialog.dialog + " " + classDialog.active}> 
  
  let path = "/dialogs/" + props.id;
    return <div className={classDialog.dialog}>
      <NavLink className={navData => navData.isActive ? classDialog.active : classDialog.item} to={path}>{props.name}</NavLink>
  </div>

}

export default DialogItem; 