import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "./users/userslice.js";
import movieReducer from "./features/movieslice.js";

export default configureStore({
    reducer:{
        user:userReducer,
        movie: movieReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck : false,  
    })
})