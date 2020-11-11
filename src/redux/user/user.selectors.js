import {createSelector} from 'reselect';

const userState = state => state.user;
 

export const UserSelectors = createSelector(
    [userState],
    (user)=> {
        console.error(user)
        return user.currentUser
    }
)