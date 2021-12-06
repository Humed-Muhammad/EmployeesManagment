import { getEmployeeHandler, deleteEmployeeHandler, createEmployeeHandler } from "./handlers/employees";
import { takeLatest, fork } from "redux-saga/effects";
import { deleteEmployeeState, getEmployees, addingEmployee } from "../Slices/EmployeesSlice";

function* getEmployeeWatcher () {
    yield takeLatest(getEmployees.type,getEmployeeHandler)
}

function* addEmployeeWatcher (){
    yield takeLatest(addingEmployee.type, createEmployeeHandler)
}


function* deleteEmployeeWatcher (){
    yield takeLatest(deleteEmployeeState.type, deleteEmployeeHandler)
}


export default function* sagaWatecher(){
    yield[
        fork(getEmployeeWatcher),
        fork(deleteEmployeeWatcher)
    ]
}