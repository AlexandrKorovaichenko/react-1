import React from 'react';
import { NavLink } from 'react-router-dom';
import classHead from './Header.module.css';


const Header = (props) => {

    //debugger;

    return(
        <header className={classHead.header}>
                    
                    <img alt="" src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
                    
                    <div className={classHead.loginBlock}>
                        {props.isAuth   
                            ? <div>
                                <span className={classHead.phraseHello} >Hi, {props.login}!</span>
                                <button onClick={props.logOutThunkCreator}>Log out</button>
                              </div>
                            : <NavLink to={"/login"}>Login</NavLink>  
                        }
                    </div>
                        
                    
        </header>
    );
}


export default Header;