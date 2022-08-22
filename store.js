import { configureStore } from "@reduxjs/toolkit"
import addReducer, { getall, post } from "./slices/addslice"
import LoginReducer from "./slices/loginslice"
import MovieReducer, { fetchdata } from './slices/viewslice'
// import { ProductFetch } from "./slices/productslice"
const store=configureStore({
    reducer:{
       
        movie:MovieReducer,
        login:LoginReducer,
        add:addReducer
        
    }
})

store.dispatch(fetchdata())
store.dispatch(getall())
store.dispatch(post())
export default store