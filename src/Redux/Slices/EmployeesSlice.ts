import { createSlice } from "@reduxjs/toolkit";



const EmployeesSlices = createSlice({
    name: "Employees",
    initialState: {
        Emloyees:[]
    },
    reducers: {
     getEmployees:(state, action) =>{
         state.Emloyees = action.payload
     },
     deleteEmployee:(state, action) =>{
         state.Emloyees.splice(action.payload, 1)
     }
    }
})


export const {
    getEmployees,
    deleteEmployee
} = EmployeesSlices.actions

export default EmployeesSlices.reducer