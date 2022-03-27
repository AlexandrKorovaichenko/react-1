import './App.css';

import React            from 'react';
import Navbar           from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News             from './components/News/News';
import Music            from './components/Music/Music';
import Setting          from './components/Setting/Setting';
import UsersContainer   from './components/Users/UsersContainer';
import HeaderContainer  from './components/Header/HeaderContainer';
import Login            from "./components/Login/Login"

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

    //<Route path='/profile/*'  element = { <Profile store={props.store} /> } />
    //<Route path='/dialogs/*'  element = { <DialogsContainer store={props.store} /> } />
    
    return (

      <BrowserRouter>
        <div className='app-wraper'>
          
            <HeaderContainer />     
            <Navbar />
          
            <div className="app-wraper-content">
              
            <Routes>

                <Route path='/profile'  element = { <ProfileContainer /> } />
                <Route path='/profile/:userId'  element = { <ProfileContainer /> } />
                
                <Route path='/dialogs/*'  element = { <DialogsContainer /> } />
                <Route path='/users/*'    element = { <UsersContainer /> } />
                                                    
                <Route path='/news/*'     element = {<News />} />
                <Route path='/music/*'    element = {<Music />} />
                <Route path='/setting/*'  element = {<Setting />} />
                <Route path='/login/*'    element = {<Login />} />
                
            </Routes> 

            </div>
 
        </div>
      </BrowserRouter>
      
      
    );
}

 
export default App;
