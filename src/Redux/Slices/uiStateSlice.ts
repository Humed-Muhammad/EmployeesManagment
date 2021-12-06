import { createSlice } from "@reduxjs/toolkit";

const uiStateSlice = createSlice({
    name:"modal",
    initialState:{
        openModal:false
    },
    reducers:{
        toogleModal:(state) =>{
            state.openModal = !state.openModal
        }
    }
})


export const {toogleModal} = uiStateSlice.actions

export default uiStateSlice.reducer