import { UserActionTypes } from './user.type'
const USER_INIT_STATE  = {
    currentUser: null
}

export const UserReducers = (state = USER_INIT_STATE, action) => {
    switch(action.type)
    {
       case UserActionTypes.ADD_USER_ITEM:
        return {
            ...state,
            currentUser: action.payload
        };
        default: 
        return {
            ...state
        }

    }
}
