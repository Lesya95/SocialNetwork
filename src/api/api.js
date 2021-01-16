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

    getUsers2(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    getUsers3(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
}

