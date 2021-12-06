import {call, put, CallEffect} from "redux-saga/effects"
import { requestHandler } from "src/Api";
import { getEmployees, setEmployees, deleteEmployee, createEmployee } from "src/Redux/Slices/EmployeesSlice";
import { GetRequestTypes } from "src/Utils/Types";
import { useAppSelector } from "src/Redux/Hooks";
import { PayloadAction } from "@reduxjs/toolkit";
// const {employeeId, employeeData} = useAppSelector(state=>state.employees)

export function * getEmployeeHandler (){
   try {
    const {data} = yield call(async()=> await requestHandler("/","get"))
    yield put(setEmployees(data))
   } catch (error) {
       console.log(error)
   }
}

export function* deleteEmployeeHandler(action:PayloadAction){
    try {
        yield call(async ()=>requestHandler("/", "delete",action.payload))
        yield put(deleteEmployee("employeeId"))
    } catch (error) {
        console.log(error)
    }
}

// export function* createEmployeeHandler(){
//     try {
//         yield call<any>(postRequest("/", "employeeData" ))
//         yield put(createEmployee("employeeData"))
//     } catch (error) {
//         console.log(error)
//     }
// }