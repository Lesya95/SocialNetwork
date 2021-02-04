import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialSate = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialSate, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth ) => ({
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    });

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me();

    if (data.resultCode == 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode == 0) {
        dispatch(getAuthUserData());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Something is wrong';
        let action = stopSubmit('login', {_error: message});
        dispatch(action);
    }
}
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode == 0) {
        dispatch(
            setAuthUserData(null, null, null, false)
        );
    }
}

export default authReducer;