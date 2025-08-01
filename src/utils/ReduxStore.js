import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestsSlice"



const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connection:connectionReducer,
        request:requestReducer

    },
})

export default appStore;

// configureStore==>Provider==>creteSlice==>add reducer to