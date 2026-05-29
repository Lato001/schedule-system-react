import { configureStore } from "@reduxjs/toolkit";
import type { UserInfo }  from "../types";
import userSliceReducer from "./states/user";

export interface AppStore{
    user: UserInfo
}

const store = configureStore <AppStore>({
    reducer:{
        user: userSliceReducer
    }
})

export type AppDispatch = typeof store.dispatch;

export default store;