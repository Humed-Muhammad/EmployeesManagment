import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const EmployeesSlices = createSlice({
    name: "Employees",
    initialState: {
        Employees: new Array,
        isFetchingEmployees:false,
        employeeId:"",
        deletingEmployee:false,
        isAddingEmployee:false,
        employeeData:{}
    },
    reducers: {
        // in redux toolkit we can directly set the state as if we are mutating it but under the hood 
        // the toolkit has a library called immer which set the state as a new state with out mutating it...
        // Still keeping the imuttablty of the redux
        getEmployees: (state) => { 
            state.isFetchingEmployees = true
            console.log(true)
        },
        setEmployees: (state, action) => {
            state.Employees = action.payload
            state.isFetchingEmployees=false
        },
        deleteEmployeeState:(state)=>{
            state.deletingEmployee= true
        },
        getEmployeeId:(state, action)=>{
            state.employeeId = action.payload
        },
        deleteEmployee: (state, action) => {
            state.Employees.splice(action.payload, 1)
            state.deletingEmployee = false
        },
        addingEmployee:(state)=>{
            state.isAddingEmployee = true
        },
        createEmployee(state,action:PayloadAction){
            state.Employees.push(action.payload)
        },
        getEmployeeData:(state, action)=>{
            state.employeeData = action.payload
        }
    }
})


export const {
    getEmployees,
    setEmployees,
    deleteEmployeeState,
    deleteEmployee,
    getEmployeeId,
    addingEmployee,
    createEmployee,
    getEmployeeData
} = EmployeesSlices.actions

export default EmployeesSlices.reducer