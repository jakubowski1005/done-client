import axios from 'axios'
import AuthService from '../services/AuthService'
import { API_USERS_URL } from '../constants/constants'

class UserService {
    
    retrieveUserByUsernameOrEmail(usernameOrEmail) {
        //const token = sessionStorage.getItem('token').toString();
        //AuthService.setupAxiosInterceptors(AuthService.createJwtToken(token))
        const headers = {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}}
        console.log(headers)
        return axios.get(`${API_USERS_URL}?username=${usernameOrEmail}`, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
    }

    retrieveUserByID(id) {
        return axios.get(`${API_USERS_URL}/${id}`)
    }

    deleteUserByID(id) {
        return axios.delete(`${API_USERS_URL}/${id}`)
    }

    getUserProperties(id) {
        return axios.get(`${API_USERS_URL}/${id}/properties`)
    }

    getUserStatistics(id) {
        return axios.get(`${API_USERS_URL}/${id}/statistics`)
    }

    putUserProperties(id, properties) {
        return axios.put(`${API_USERS_URL}/${id}/properties`, properties)
    }

    putUserStatistics(id, statistics) {
        return axios.put(`${API_USERS_URL}/${id}/statistics`, statistics)
    }

}

export default new UserService()