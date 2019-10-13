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

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false;
        return true
    }

    setupAxiosInterceptors(authHeader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = authHeader
                }
                return config
            }
        )
    }
}

export default new AuthService()