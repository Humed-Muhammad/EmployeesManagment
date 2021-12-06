import { configureStore } from "@reduxjs/toolkit"
import employees from "./Slices/EmployeesSlice"
import watcherSaga from "./Sagas/rootSaga";
import createSagaMiddelware from "redux-saga"

const sagaMiddleware = createSagaMiddelware()


export const store = configureStore({
    reducer: {
        employees
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
    
})
sagaMiddleware.run(watcherSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

