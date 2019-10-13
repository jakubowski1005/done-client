import types from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.LOAD_USER_DATA:
            return state;
        default:
            return state;
    }
}