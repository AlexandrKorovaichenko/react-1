import React from 'react';
import { NavLink } from 'react-router-dom';
import classNavbar from './Navbar.module.css';
//import Friends from './Friends/Friends';
//<Friends friends={props.navbar.friends}/>

const Navbar = () => {

    return(
        
        <div className={classNavbar.menuLeft}>

            <nav className = {classNavbar.nav}>

                <div className = {classNavbar.item}>
                    <NavLink to="/profile"  className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }>MyPost (Profile)</NavLink>
                </div>

                <div className = {classNavbar.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }>Dialogs (Messages)</NavLink>
                </div>

                <div className = {classNavbar.item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }>Users</NavLink>
                </div>

                <div className = {classNavbar.item}>
                    <NavLink to="/news" className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }>News</NavLink>
                </div>

                <div className = {classNavbar.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }>Music</NavLink>
                </div>

                
                <div className = {classNavbar.item}>
                    <NavLink to="/setting" className = { navData => navData.isActive ? classNavbar.active : classNavbar.item }>Setting</NavLink>
                </div>   

        </nav>
        
        
    
        

    </div>    

    );
}

export default Navbar;