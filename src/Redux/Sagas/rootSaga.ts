import { getEmployeeHandler, deleteEmployeeHandler, createEmployeeHandler, updateEmployeeHandler } from "./handlers/employeesSaga";
import { takeLatest, fork, takeEvery,  } from "redux-saga/effects";
import { getEmployees, getEmployeeData, getEmployeeId, updateRequest } from "../Slices/EmployeesSlice";


 function* getEmployeeWatcher () {
    yield takeLatest(getEmployees.type,getEmployeeHandler)
}

function* addEmployeeWatcher (){
    yield takeLatest(getEmployeeData.type, createEmployeeHandler)
}


function* deleteEmployeeWatcher (){
    yield takeEvery(getEmployeeId.type, deleteEmployeeHandler)
}
function* updateEmployeeWatcher (){
    yield takeLatest(updateRequest.type,updateEmployeeHandler)
}

export default function* sagaWatecher(){
    /**non-bloking sagas */
       yield fork(getEmployeeWatcher)
       yield fork(deleteEmployeeWatcher)
       yield fork(addEmployeeWatcher)
       yield fork(updateEmployeeWatcher)
}