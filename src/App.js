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
import { initializedApp } from "./redux/app-reducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';


class App extends React.Component {

    //<Route path='/profile/*'  element = { <Profile store={props.store} /> } />
    //<Route path='/dialogs/*'  element = { <DialogsContainer store={props.store} /> } />
    
    componentDidMount(){ this.props.initializedApp(); }

    render() {
      
      if(!this.props.initialized){
        return <Preloader />
      }
      
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

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
}) 
 
export default compose(
    connect( mapStateToProps, {initializedApp} ) (App)
  );

