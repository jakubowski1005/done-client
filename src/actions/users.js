import types from './actionTypes'

export const updateUserProps = (userProps) => ({
    type: types.UPDATE_USER_PROPS,
    userProps
})

export const updateUserStats = (userStats) => ({
    type: types.UPDATE_USER_STATS,
    userStats
})

export const removeUser = () => ({
    type: types.DELETE_USER
})

export const loadUserData = () => ({
    type: types.LOAD_USER_DATA
})
