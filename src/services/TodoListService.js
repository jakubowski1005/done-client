import axios from 'axios'
import {
    USERS_URL
} from '../constants/URL'

class TodoListService {

    retrieveAllLists(userId) {
        return axios.get(`${USERS_URL}/${userId}/lists`)
    }

    retrieveList(userId, listId) {
        return axios.get(`${USERS_URL}/${userId}/lists/${listId}`)
    }

    addNewList(userId, todoList) {
        return axios.post(`${USERS_URL}/${userId}/lists`, todoList)
    }

    updateList(userId, listId, newTodoList) {
        return axios.put(`${USERS_URL}/${userId}/lists/${listId}`, newTodoList)
    }

    deleteList(userId, listId) {
        return axios.delete(`${USERS_URL}/${userId}/lists/${listId}`)
    }
}

export default new TodoListService()