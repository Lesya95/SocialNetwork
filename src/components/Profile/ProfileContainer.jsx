import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/prifile-reducer";
import {withRouter} from "react-router";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 13901;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
                <Profile {...this.props} />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
