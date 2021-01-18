import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialSate = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialSate, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true,}
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false,}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }

        default:
            return state;
    }

}

export const followSuccess = (usersId) => ({type: FOLLOW, usersId});

export const unfollowSuccess = (usersId) => ({type: UNFOLLOW, usersId});

export const setUsers = (users) => ({ type: SET_USERS, users});

export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber});

export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalCount});

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export const toggleIsFollowingProgress = (followingInProgress, userId) => (
    { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
    }
}

export  const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
           dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId));
    })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId));
    })
}

export default usersReducer;