import { createSlice } from "@reduxjs/toolkit";
import type { UserInfo } from "../../types";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/LocalStorageUtility";


export const EmptyUserState : UserInfo = {
    _id: "",
    name: "",
    email: ""
}
export const UserKey = 'user'; 

export const userSlice = createSlice({
    name: "userInfo",
    initialState : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string): EmptyUserState,

    reducers: {
        createUser: (state , action) =>{
            persistLocalStorage<UserInfo>(UserKey, action.payload);
            return action.payload
        } ,
        updateUser: (state, action) =>{
            const result ={...state , ...action.payload}
            persistLocalStorage(UserKey, result)
            return result;
        
        },

        resetUser:() => {
            clearLocalStorage(UserKey);
            return EmptyUserState
        }
    }
})

export const {createUser, updateUser, resetUser} = userSlice.actions
export default userSlice.reducer
