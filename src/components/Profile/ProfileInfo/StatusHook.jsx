import React, { useEffect, useState } from 'react';
//import classProfileInfo from './ProfileInfo.module.css';
//import Preloader from "../../common/preloader/preloader";

const StatusHook = (props) =>  { 

    let localState = useState(false);
    let editMode = localState[0];
    let setEditMode = localState[1];

    let localState2 = useState(props.status);
    let status = localState2[0];
    let setStatus = localState2[1];

    useEffect( () => { setStatus(props.status) }, [props.status] );

    const activateMode = () => {
        setEditMode(true);           
    }

    const deActivateEditMode = () => { 
        setEditMode(false);
        props.updateStatusThunkCreator(status);
    }

    const onStatusChange = (event) =>  {
        setStatus(event.currentTarget.value);
    }

    return(
            <div>
                
                    {!editMode &&
                        <div>      
                            <span onDoubleClick={activateMode}> { props.status } </span>
                        </div>
                    }
                    
                    {editMode &&
                        <div>  
                            <input autoFocus = { true } 
                                   defaultValue = {""} 
                                   onBlur = { deActivateEditMode } 
                                   onChange  = {onStatusChange}
                                   value = { status } 
                            />
                        </div>
                    }

            </div>
        )
    }


export default StatusHook; 