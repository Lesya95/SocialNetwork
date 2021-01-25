
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import News from "./components/News/News";
import Videos from "./components/Videos/Videos";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}
                    />
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}
                    />
                    <Route path='/users'
                           render={() => <UsersContainer/>}
                    /><Route path='/login'
                             render={() => <LoginPage/>}
                />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/videos' render={() => <Videos/>}/>
                    <Route path='/musics' render={() => <Musics/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);