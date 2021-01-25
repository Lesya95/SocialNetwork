import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2be884d6-9097-43dc-a1f4-bff05001988d',
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    getUserProfile(userId) {
        console.warn('obsolete method, please profileAPI object');
        return profileAPI.getUserProfile(userId);
    }
}

export const profileAPI = {

    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(statusText) {
        return instance.put(`profile/status`, {status: statusText})
            .then(response => response.data)
    }
}

export  const  authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
            return response.data
        })
    }
}

