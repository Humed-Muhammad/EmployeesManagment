import {call, put, CallEffect} from "redux-saga/effects"
import { deleteRequest, getRequest, postRequest } from "src/Api";
import { getEmployees, setEmployees, deleteEmployee, createEmployee, deleteEmployeeState, faildToCreateEmployee, updateEmployee } from "src/Redux/Slices/EmployeesSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
import { colors } from "src/Utils/Colors";

export function * getEmployeeHandler (){
   try {
    const {data} = yield call(async()=> await getRequest("/","get"))
    yield put(setEmployees(data))
   } catch (error) {
    toast("Un able to fetch please try again lattter!",{
        theme:"light",
        position:"top-right",
        style:{
            backgroundColor:colors.red
        }
       })
   }
}

export function* deleteEmployeeHandler(action:PayloadAction){
    try {
       const {data} =  yield call(async ()=> await deleteRequest("/",action.payload))
       if(data.status){
           yield put(deleteEmployee(action.payload))
           toast(data.message,{
            theme:"light",
            position:"top-right"
           })
       }
    } catch (error) {
        toast("Un able to delete please try again lattter!",{
            theme:"light",
            position:"top-right",
            style:{
                backgroundColor:colors.red
            }
           })
    }
}

export function* createEmployeeHandler(action:PayloadAction){
    try {
       const {data} =  yield call(()=>postRequest("/", action.payload ))
       if(data.status){
           yield put(createEmployee(data.data))
           toast("Employee successfully updated!",{
               theme:"light",
               position:"top-right"
           })
       }else{
           yield put(faildToCreateEmployee(true))
       }
    } catch (error) {
        toast("Un able to create employee please try again lattter!",{
            theme:"light",
            position:"top-right",
            style:{
                backgroundColor:colors.red
            }
           })
    }
}

export function* updateEmployeeHandler(action:PayloadAction){
    try {
        const {data} = yield call(()=>postRequest("/update",action.payload))
        yield put(updateEmployee(data.data))
        toast("Successfully updated!",{
            theme:"light",
            position:"top-right"
        })
    } catch (error) {
        toast("Unable to update!!! ",{
            theme:"light",
            position:"top-right"
        })
    }
}