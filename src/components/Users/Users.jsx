import React from "react";
import { NavLink } from 'react-router-dom';
import classUsers from './Users.module.css';
import userPhotoDef from "../../assets/images/def.jpg";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageCount);

    let pages = [];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);   
    };


    return (

        <div>
            
                <div>
                    {
                        pages.map( p => {
                            return <span  key={p}
                                            onClick = { (e) => { props.onPageChanged(p) } } 
                                            className={ p === props.currentPage ? classUsers.selectedPage : "" }>{p}</span>         
                            }
                        )
                    }

                </div>


                {
                    props.users.map( u => <div key={u.id}>

                        {
                            //console.log(props.followVisible)
                        }

                        <span>

                            <div>
                                <NavLink to={"/profile/" + u.id}>
                                    <img className={classUsers.photo} alt="" 
                                        src={u.photos.small != null ? u.photos.small : userPhotoDef}
                                    />
                                </NavLink>
                            </div>

                            <div>
                                { u.followed  

                                    ? < button disabled = {props.followVisible.includes(u.id) ? true : false} 
                                               onClick  = {() => { props.unFollowThunkCreator(u.id); }
                                      }> UnFollow </button>

                            
                                    : < button disabled = {props.followVisible.includes(u.id) ? true : false} 
                                               onClick = {() => { props.followThunkCreator(u.id); }
                                      }> Follow </button> 

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