import { UserActionTypes } from './user.type';


export const addUser =  user => 
{
    console.log(user)
    return  {
        type: UserActionTypes.ADD_USER_ITEM,
        payload: user
    }
}
 
