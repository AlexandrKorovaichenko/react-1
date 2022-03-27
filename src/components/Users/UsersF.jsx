import React from "react";
import classUsers from './Users.module.css';
import * as axios from "axios";
import userPhotoDef from "../../assets/images/def.jpg";


//<span>
//    <div>{u.location.country}</div>
//    <div>{u.location.city}</div>
//</span>

let Users = (props) => {


    let getUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
                //debugger;
                props.setUsers(response.data.items);
                //debugger;
            });
        }
    }

    
    return (

            <div>
                
                <button onClick={getUsers}>Get Users</button>

                {
                    props.users.map( u => <div key={u.id}>

                        <span>

                            <div>
                                <img className={classUsers.photo} alt="" src={u.photos.small != null ? u.photos.small : userPhotoDef}/>
                            </div>

                            <div>
                                { u.followed  
                                    ? < button onClick = { () => { props.follow(u.id)  } } > Follow   </button> 
                                    : < button onClick = { () => { props.unfollow(u.id)} } > Unfollow </button> 
                                }
                            </div>

                        </span>

                        <span>

                            <span>
                                <div>{u.name}</div>
                                <div>{u.staus}</div>
                            </span>

                            

                        </span>

                   </div>)
                }
            </div>

    );
}

export default Users;