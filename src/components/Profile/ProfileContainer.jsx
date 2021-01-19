import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/prifile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 13901;
        }
        this.props.getUserProfile(userId)

    }

    render() {

        return (
                <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
