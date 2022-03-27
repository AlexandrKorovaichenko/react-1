
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY" : "122269e0-74ed-428e-a29c-7af2ba9c2dd2"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});




export const usersAPI = {

    // ++ Для Юсеров
    getUsers(currentPage, pageCount) {
        return instance.get(
                `users?page=${currentPage}&count=${pageCount}`
            ).then(
                response => {return response.data;});
        },


    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    // -- Для Юсеров

    
    // ++ Для Профайла
    getProfile(userId) {
        console.warn("Метод устарел. Используется метод profileAPI.getProfile");
        profileAPI.getProfile(userId);
    }
    // -- Для Профайла

}




// ++ Для Профайла
export const profileAPI = {


    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },


    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}


export const authAPI = {
    
    me() {
        return instance.get(`auth/me`);
    },


    login( email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },


    logout() {
        return instance.delete(`auth/login`);
    },


}
