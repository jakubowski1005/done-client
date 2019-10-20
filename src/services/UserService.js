import axios from 'axios'
import { USERS_URL } from '../constants/constants'

class UserService {
    
    retrieveUserByUsernameOrEmail(usernameOrEmail) {
        return axios.get(`${USERS_URL}?username=${usernameOrEmail}`)
    }

    retrieveUserByID(id) {
        return axios.get(`${USERS_URL}/${id}`)
    }

    deleteUserByID(id) {
        return axios.delete(`${USERS_URL}/${id}`)
    }

    getUserProperties(id) {
        return axios.get(`${USERS_URL}/${id}/properties`)
    }

    getUserStatistics(id) {
        return axios.get(`${USERS_URL}/${id}/statistics`)
    }

    putUserProperties(id, properties) {
        return axios.put(`${USERS_URL}/${id}/properties`, properties)
    }

    putUserStatistics(id, statistics) {
        return axios.put(`${USERS_URL}/${id}/statistics`, statistics)
    }

}

export default new UserService()