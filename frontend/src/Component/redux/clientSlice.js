import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name:"clientSlice",
    initialState:{
        client:[],
    },
    reducers:{
        addClient:(state,action)=>{
            state.client = [action.payload];
        }
    }
})


export const { addClient } = clientSlice.actions;
export default clientSlice.reducer;

