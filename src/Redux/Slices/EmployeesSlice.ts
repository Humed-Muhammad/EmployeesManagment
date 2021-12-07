import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const EmployeesSlices = createSlice({
    name: "Employees",
    initialState: {
        Employees: new Array,
        isFetchingEmployees:false,
        faildToCtreate:false,
        employeeId:"",
        deletingEmployee:false,
        isAddingEmployee:false,
        employeeData:{},
        employeeIdToUpdate:"",
        findedEmployee:{},
        isUpdating:false
    },
    reducers: {
        // in redux toolkit we can directly set the state as if we are mutating it but under the hood 
        // the toolkit has a library called immer which set the state as a new state with out mutating it...
        // Still keeping the imuttablty of the redux
        getEmployees: (state) => { 
            state.isFetchingEmployees = true
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
                    const id =  state.Employees.findIndex(item=>item._id===action.payload)
                    state.Employees.splice(id, 1)
        },
        addingEmployee:(state)=>{
            state.isAddingEmployee = true
        },
        createEmployee(state,action){
            state.Employees.push(action.payload)
        },
        faildToCreateEmployee:(state, action)=>{
            state.faildToCtreate = action.payload
        },
        getEmployeeData:(state, action)=>{
            state.employeeData = action.payload
        },
        getEmployeeIdToUpdate:(state, action)=>{
            state.employeeIdToUpdate = action.payload
        },
        updateEmployee:(state, action)=>{
            const entry = state.Employees.findIndex(item=>item._id === state.employeeIdToUpdate)
            state.Employees[entry] = action.payload
            // state.Employees.push(action.payload)
        },
        updateRequest:(state, action)=>{
            state.employeeData = action.payload
        },
        findEmployeeData:(state, action)=>{
            const item = state.Employees.find(item=>item._id===action.payload)
            state.findedEmployee = item
        },
        checkIsUpdating:(state,action) =>{
            state.isUpdating = action.payload
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
    getEmployeeData,
    faildToCreateEmployee,
    getEmployeeIdToUpdate,
    updateEmployee,
    updateRequest,
    findEmployeeData,
    checkIsUpdating
} = EmployeesSlices.actions

export default EmployeesSlices.reducer