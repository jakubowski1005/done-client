import axios from 'axios'

const API_LISTS_URL = 'https://done-application.herokuapp.com/api/users'

class TodoListService {

    retrieveAllLists(userId) {
        return axios.get(`${API_LISTS_URL}/${userId}/lists`)
    }

    retrieveList(userId, listId) {
        return axios.get(`${API_LISTS_URL}/${userId}/lists/${listId}`)
    }

    addNewList(userId, todoList) {
        return axios.post(`${API_LISTS_URL}/${userId}/lists`, todoList)
    }

    updateList(userId, listId, newTodoList) {
        return axios.put(`${API_LISTS_URL}/${userId}/lists/${listId}`, newTodoList)
    }

    deleteList(userId, listId) {
        return axios.delete(`${API_LISTS_URL}/${userId}/lists/${listId}`)
    }
}

export default new TodoListService()