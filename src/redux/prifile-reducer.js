import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: '',
}

const profileReducer = (state = initialSate, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [ ...state.postsData, {
                    id: 3,
                    message: state.newPostText,
                    imgSrc: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
                    valueLike: 0,
                }],
                newPostText: '',
            };

        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case  SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo,
            };

        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    })
}

export default profileReducer;