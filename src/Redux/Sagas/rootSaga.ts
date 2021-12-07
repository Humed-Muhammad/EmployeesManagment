import { getEmployeeHandler, deleteEmployeeHandler, createEmployeeHandler } from "./handlers/employeesSaga";
import { takeLatest, fork, takeEvery,  } from "redux-saga/effects";
import { deleteEmployeeState, getEmployees, addingEmployee, deleteEmployee, createEmployee, getEmployeeData, getEmployeeId } from "../Slices/EmployeesSlice";
import axios from "axios";



 function* getEmployeeWatcher () {
    yield takeLatest(getEmployees.type,getEmployeeHandler)
}

function* addEmployeeWatcher (){
    yield takeLatest(getEmployeeData.type, createEmployeeHandler)
}


function* deleteEmployeeWatcher (){
    yield takeEvery(deleteEmployee.type, deleteEmployeeHandler)
}


export default function* sagaWatecher(){
    /**non-bloking sagas */
       yield fork(getEmployeeWatcher)
       yield fork(deleteEmployeeWatcher)
       yield fork(addEmployeeWatcher)
}