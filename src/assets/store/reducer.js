
import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    movie:[]
}

const movieSlice = createSlice({
    name:'movieList',
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            state.movie =action.payload
        }
    }
})


export const {addMovie} =movieSlice.actions
export default movieSlice.reducer