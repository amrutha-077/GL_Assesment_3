import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchdata=createAsyncThunk('/movie/fetchdata',async ()=>{
try{
    const result=await axios.get('http://localhost:3001/empDetails')
    return result.data
}
catch(err){
    console.log(err)
}
})


const initialValue={
    movieData:[],
    loading:true
}
const viewSlice=createSlice({
    name:'movie',

    initialState:{
        value:initialValue
    },

    reducers:{


    },

    extraReducers:{
        [fetchdata.pending]:(state,action)=>{
            console.log("pending",action)
            state.loading=true
        },
        [fetchdata.fulfilled]:(state,action)=>{
            console.log('fullfiled',action)
            state.loading=false
            state.value.movieData=[...state.value.movieData,...action.payload]
            
        },
        [fetchdata.rejected]:(state,action)=>{
            console.log('fullfiled',action)
            state.loading=false
        }
    }
})
export const {add,removeUser}=viewSlice.actions
export default viewSlice.reducer;