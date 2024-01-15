import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name:"clientSlice",
    initialState:{
        client:[],
        clientSearch:[]
    },
    reducers:{
        addClient:(state,action)=>{
            state.client = action.payload;
        },
        addClientSearch:(state,action)=>{
            state.clientSearch = action.payload;
        }
    }
})


export const { addClient,addClientSearch } = clientSlice.actions;
export default clientSlice.reducer;
