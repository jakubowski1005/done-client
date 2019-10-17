import axios from 'axios'
import { API_URL } from '../constants/constants'


export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'autheticatedUser'

class AuthService {

    loginUser(usernameOrEmail, password) {
        return axios.post(`${API_URL}/auth/signin`, {usernameOrEmail, password})
    }

    registerUser(username, email, password) {
        return axios.post(`${API_URL}/auth/signup`, {username, email, password})
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem('token', token);
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return '';
        return user;
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('token')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false;
        return true
    }

    setupAxiosInterceptors(authHeader) {
        console.log(authHeader)
        axios.interceptors.request.use(
            function(config) {
                console.log(config)
                //if (this.isUserLoggedIn()) {
                    console.log(sessionStorage.getItem('token'))
                    const jwt = 'Bearer ' + sessionStorage.getItem('token')
                    config.headers.Authorization = jwt
                    //config.headers.accept = "application/json"
                //}
                return config
            }
        )
    }
}

export default new AuthService()