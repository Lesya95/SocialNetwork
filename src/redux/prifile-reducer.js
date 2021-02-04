import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const UPDATE_USER_STATUS = 'profile/UPDATE_USER_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialSate = {
    postsData: [
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta modi maxime, hic ' +
                'culpa debitis, placeat quae neque autem aliquid incidunt! Eum laborum aliquam aperiam?',
            imgSrc: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
            valueLike: 12,
        },
        {
            id: 2,
            message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore laboriosam nemo, ' +
                'beatae consectetur dolores error commodi eaque sapiente placeat in. Esse, recusandae hic!',
            imgSrc: 'https://i.pinimg.com/564x/3c/e6/25/3ce625ab130460755d1475fb033652f2.jpg',
            valueLike: 39,
        },
    ],
    profileInfo: null,
    status: ' ',
}

const profileReducer = (state = initialSate, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 3,
                    message: action.newPost,
                    imgSrc: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                    valueLike: 0,
                }],
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId),
            };
        case  SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo,
            };
        case  SET_USER_STATUS:
            return {
                ...state,
                status: action.statusText,
            };
        case  UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.statusText,
            };

        default:
            return state;
    }

}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost: newPost});
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo});
export const setUserStatus = (statusText) => ({type: SET_USER_STATUS, statusText: statusText});
export const setUpdateUserStatus = (statusText) => ({type: UPDATE_USER_STATUS, statusText: statusText});
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId});

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
}
export const updateUserStatus = (statusText) => async (dispatch) => {
    let data = await profileAPI.updateStatus(statusText);
    if (data.resultCode === 0) {
        dispatch(setUpdateUserStatus(statusText));
    }
}

export default profileReducer;