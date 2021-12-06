import { configureStore } from "@reduxjs/toolkit"
import employees from "./Slices/EmployeesSlice"

export const store = configureStore({
    reducer: {
        employees
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

