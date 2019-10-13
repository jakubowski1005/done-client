import types from './actionTypes'
import UserService from '../services/UserService'
import AuthService from '../services/AuthService'

export const thunkedLoadUserData = (username) =>
    (dispatch, getState) =>
        UserService.retrieveUserByUsernameOrEmail(username)
            .then(res => res.data)
            .then(user => {
                dispatch(loadUserData())
            })

// export const thunkedRemoveUser = (id) =>
//     (dispatch, getState, UserService) =>
//         UserService.deleteUserByID()

export const updateUserProps = (userProps) => ({
    type: types.UPDATE_USER_PROPS,
    userProps
})

export const updateUserStats = (userStats) => ({
    type: types.UPDATE_USER_STATS,
    userStats
})

export const removeUser = (id) => ({
    type: types.DELETE_USER,
    id: id
})

export const loadUserData = () => ({
    type: types.LOAD_USER_DATA
})
