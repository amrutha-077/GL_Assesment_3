import {createSlice } from "@reduxjs/toolkit";


const initialState={
    loginstatus:false,
}
const LoginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        status:(state,action)=>{
            state.loginstatus=!(state.loginstatus)
        }
    }
})
export const{status}=LoginSlice.actions
export default LoginSlice.reducer