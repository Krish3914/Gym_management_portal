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
        },
        removeClient: (state, action) => {
            state.client = state.client.filter((client) => client._id !== action.payload);
          },
        
    }
})


export const { addClient,addClientSearch,removeClient } = clientSlice.actions;
export default clientSlice.reducer;
