import React from 'react';
import classFriends from './Friends.module.css';
import Friend from './FriendItem/Friend';

const Friends = (props) => {

    let friends = props.friends; 
    let friendElements = (friends.map( (f, count) => (<Friend key={count} avatarSrc={f.avatar} status={f.status} name={f.name}/>))).splice(0,3);

    return(
            <div className={classFriends.container}>
                <div className={classFriends.title}>My friends</div>
                <div className={classFriends.items}>
                    {friendElements}
                </div>
            </div>
        );
}

export default Friends;