import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store";

/**
 * @Employees
 */

export const selectEmployees = (state:RootState)=>{
    const inputSelector = (state:RootState)=> state.employees.Employees

    const outputSelector = createSelector([inputSelector], employees=>employees)

    return outputSelector(state)
}