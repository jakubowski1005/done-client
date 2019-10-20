import axios from 'axios'
import { USERS_URL } from '../constants/constants'

class TodoService {

    retrieveAllTodos(userId, listId) {
        return axios.get(`${USERS_URL}/${userId}/lists/${listId}/todos`)
    }

    retrieveTodoById(userId, listId, todoId) {
        return axios.get(`${USERS_URL}/${userId}/lists/${listId}/todos/${todoId}`)
    }

    createTodo(userId, listId, todo) {
        return axios.post(`${USERS_URL}/${userId}/lists/${listId}/todos`, todo)
    }

    updateTodo(userId, listId, todoId, newTodo) {
        return axios.put(`${USERS_URL}/${userId}/lists/${listId}/todos/${todoId}`, newTodo)
    }

    deleteTodo(userId, listId, todoId) {
        return axios.delete(`${USERS_URL}/${userId}/lists/${listId}/todos/${todoId}`)
    }
}

export default new TodoService()