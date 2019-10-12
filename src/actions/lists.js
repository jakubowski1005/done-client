import types from './actionTypes'

export const addList = (list) => ({
    type: types.ADD_LIST,
    list
})

export const updateList = (id, list) => ({
    type: types.UPDATE_LIST,
    id,
    list
})

export const deleteList = (id) => ({
    type: types.DELETE_LIST
})

export const editList = (id) => ({
    type: types.EDIT_MODE_LIST
})

export const acceptEditsList = (id) => ({
    type: types.ACCEPT_EDIT_MODE_LIST
})

export const cancelEditsList = (id) => ({
    type: types.CANCEL_EDIT_MODE_LIST
})