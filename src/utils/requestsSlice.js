import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name:"request",
    initialState:[],
    reducers:{
        addRequests:(state,action)=>action.payload,
        removeRequests:()=>null
    }
})

export const {addRequests,removeRequests}=requestsSlice.actions
export default requestsSlice.reducer