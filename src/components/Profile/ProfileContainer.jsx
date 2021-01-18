import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/prifile-reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 13901;
        }
        this.props.getUserProfile(userId)

    }

    render() {
        if(!this.props.isAuth){ return <Redirect to='/login' />}

        return (
                <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.auth.isAuth,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
