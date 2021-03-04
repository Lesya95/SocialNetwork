import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserImg} from "../../redux/auth-reducer";
import {profileAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        profileAPI.getUserProfile(this.props.userId).then(data => {
            this.props.setAuthUserImg(data.photos.small)
        })
    }

    render() {
        return <Header {...this.props} />
    }
};

let mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.id,
        imgSrc: state.auth.imgSrc
    }
)

export default connect(mapStateToProps, {logout, setAuthUserImg})(HeaderContainer);