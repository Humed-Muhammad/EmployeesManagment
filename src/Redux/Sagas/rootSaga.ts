import { getEmployeeHandler, deleteEmployeeHandler } from "./handlers/employees";
import { takeLatest, fork, takeEvery,  } from "redux-saga/effects";
import { deleteEmployeeState, getEmployees, addingEmployee, deleteEmployee } from "../Slices/EmployeesSlice";
import axios from "axios";



 function* getEmployeeWatcher () {
    yield takeLatest(getEmployees.type,getEmployeeHandler)
    console.log("object")
}

// function* addEmployeeWatcher (){
//     yield takeEvery(addingEmployee.type, createEmployeeHandler)
// }


function* deleteEmployeeWatcher (){
    yield takeLatest(deleteEmployee.type, deleteEmployeeHandler)
}


export default function* sagaWatecher(){
    // yield[
       yield fork(getEmployeeWatcher)
       yield fork(deleteEmployeeWatcher)
    // ]
}