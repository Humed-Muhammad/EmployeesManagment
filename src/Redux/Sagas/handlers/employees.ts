import {call, put, CallEffect} from "redux-saga/effects"
import { deleteRequest, getRequestHandler, postRequest } from "src/Api";
import { getEmployees, setEmployees, deleteEmployee, createEmployee } from "src/Redux/Slices/EmployeesSlice";
import { GetRequestTypes } from "src/Utils/Types";
import { useAppSelector } from "src/Redux/Hooks";
// const {employeeId, employeeData} = useAppSelector(state=>state.employees)

export function * getEmployeeHandler (){
   try {
    const response:any = yield call<any>(async()=> await getRequestHandler("/","get"))
    yield put(setEmployees(response.data))
    console.log("They called me getEmployeeMethod")
   } catch (error) {
       console.log(error)
   }
}

export function* deleteEmployeeHandler(){
    try {
        yield call<any>(deleteRequest("/", "employeeId"))
        yield put(deleteEmployee("employeeId"))
    } catch (error) {
        console.log(error)
    }
}

export function* createEmployeeHandler(){
    try {
        yield call<any>(postRequest("/", "employeeData" ))
        yield put(createEmployee("employeeData"))
    } catch (error) {
        console.log(error)
    }
}