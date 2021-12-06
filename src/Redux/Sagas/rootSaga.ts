import { getEmployeeHandler, deleteEmployeeHandler, createEmployeeHandler } from "./handlers/employees";
import { takeLatest, fork, takeEvery,  } from "redux-saga/effects";
import { deleteEmployeeState, getEmployees, addingEmployee } from "../Slices/EmployeesSlice";
import axios from "axios";



export default function* getEmployeeWatcher () {
    yield takeLatest(getEmployees.type,getEmployeeHandler)
    console.log("object")
}

// function* addEmployeeWatcher (){
//     yield takeEvery(addingEmployee.type, createEmployeeHandler)
// }


// function* deleteEmployeeWatcher (){
//     yield takeEvery(deleteEmployeeState.type, deleteEmployeeHandler)
// }


// export default function* sagaWatecher(){
//     yield[
//         fork(addEmployeeWatcher),
//         fork(getEmployeeWatcher),
//         fork(deleteEmployeeWatcher),
//     ]
// }