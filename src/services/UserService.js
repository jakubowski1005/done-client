import axios from 'axios'

const API_USERS_URL = 'https://done-application.herokuapp.com/api/users'

class UserService {
    
    retrieveUserByUsernameOrEmail(usernameOrEmail) {
        return {id: 1, username: usernameOrEmail, email: usernameOrEmail}
    }

    retrieveUserByID(id) {

    }

    deleteUserByID(id) {

    }

    getUserProperties(id) {

    }

    getUserStatistics(id) {

    }

    putUserProperties(id, properties) {

    }

    putUserStatistics(id, statistics) {

    }

}

export default new UserService()