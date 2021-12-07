import {call, put, CallEffect} from "redux-saga/effects"
import { deleteRequest, getRequest, postRequest } from "src/Api";
import { getEmployees, setEmployees, deleteEmployee, createEmployee, deleteEmployeeState } from "src/Redux/Slices/EmployeesSlice";
import { GetRequestTypes } from "src/Utils/Types";
import { useAppSelector } from "src/Redux/Hooks";
import { PayloadAction } from "@reduxjs/toolkit";
// const {employeeId, employeeData} = useAppSelector(state=>state.employees)

export function * getEmployeeHandler (){
   try {
    const {data} = yield call(async()=> await getRequest("/","get"))
    console.log(data)
    yield put(setEmployees(data))
   } catch (error) {
       console.log(error)
   }
}

export function* deleteEmployeeHandler(action:PayloadAction){
    try {
       const {data} =  yield call(async ()=> await deleteRequest("/",action.payload))
       console.log(data)
       yield put(deleteEmployee(action.payload))
    } catch (error) {
        console.log(error)
    }
}

export function* createEmployeeHandler(action:PayloadAction){
    try {
       const {data} =  yield call(()=>postRequest("/", action.payload ))
       yield put(createEmployee(data))
    } catch (error) {
        console.log(error)
    }
}