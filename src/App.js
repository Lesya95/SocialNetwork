import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Videos from "./components/Videos/Videos";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer />}
                    />
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer />}
                    />
                    <Route path='/users'
                           render={ () => <UsersContainer />}
                    /><Route path='/login'
                           render={ () => <LoginPage />}
                    />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/videos' render={ () => <Videos /> } />
                    <Route path='/musics' render={ () => <Musics /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                </div>
            </div>
    );
}

export default App;