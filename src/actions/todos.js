import types from './actionTypes'

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    todo
})

export const updateTodo = (id, todo) => ({
    type: types.UPDATE_TODO,
    id,
    todo
})

export const completeTodo = (id) => ({
    type: types.COMPLETE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO
})

export const editTodo = (id) => ({
    type: types.EDIT_MODE_TODO
})

export const acceptEditsTodo = (id) => ({
    type: types.ACCEPT_EDIT_MODE_TODO
})

export const cancelEditsTodo = (id) => ({
    type: types.CANCEL_EDIT_MODE_TODO
})