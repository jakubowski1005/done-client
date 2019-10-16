import axios from 'axios'

const API_USERS_URL = 'https://done-application.herokuapp.com/api/users'

class TodoService {

    retrieveAllTodos(userId, listId) {
        return axios.get(`${API_USERS_URL}/${userId}/lists/${listId}/todos`)
    }

    retrieveTodoById(userId, listId, todoId) {
        return axios.get(`${API_USERS_URL}/${userId}/lists/${listId}/todos/${todoId}`)
    }

    createTodo(userId, listId, todo) {
        return axios.post(`${API_USERS_URL}/${userId}/lists/${listId}/todos`, todo)
    }

    updateTodo(userId, listId, todoId, newTodo) {
        return axios.put(`${API_USERS_URL}/${userId}/lists/${listId}/todos/${todoId}`, newTodo)
    }

    deleteTodo(userId, listId, todoId) {
        return axios.delete(`${API_USERS_URL}/${userId}/lists/${listId}/todos/${todoId}`)
    }
}

export default new TodoService()