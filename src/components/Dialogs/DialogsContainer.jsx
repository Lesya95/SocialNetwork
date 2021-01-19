import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default  DialogsContainer;