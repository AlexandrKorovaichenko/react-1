
import React from 'react';
import classFriend from './Friend.module.css';

const FriendItem = (props) => {

    return(

            <div className={classFriend.item}>

                <div className={classFriend.avatar}>
                    <img alt="" src={props.avatarSrc}/>
                </div>

                <div className={classFriend.name}>{props.name}</div>
                <div className={classFriend.status}>{props.status}</div>

            </div>


        );
}

export default FriendItem;