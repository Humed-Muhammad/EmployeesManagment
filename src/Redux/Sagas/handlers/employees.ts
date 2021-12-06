import {call, put, CallEffect} from "redux-saga/effects"
import { deleteRequest, getRequest, postRequest } from "src/Api";
import { getEmployees, setEmployees, deleteEmployee } from "src/Redux/Slices/EmployeesSlice";
import { GetRequestTypes } from "src/Utils/Types";
import { useAppSelector } from "src/Redux/Hooks";
const {employeeId, employeeData} = useAppSelector(state=>state.employees)

export function * getEmployeeHandler (){
   try {
    const data:GetRequestTypes = yield call<any>(getRequest("/"))
    yield put(setEmployees(data))
   } catch (error) {
       console.log(error)
   }
}

export function* deleteEmployeeHandler(){
    try {
        yield call<any>(deleteRequest("/", employeeId))
        yield put(deleteEmployee(employeeId))
    } catch (error) {
        console.log(error)
    }
}

export function* createEmployeeHandler(){
    try {
        yield call<any>(postRequest("/", employeeData ))
    } catch (error) {
        console.log(error)
    }
}