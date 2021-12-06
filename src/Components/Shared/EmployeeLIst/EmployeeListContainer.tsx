import { useEffect, useCallback } from 'react'
import EmployeeList from "./EmployeeList";
import { useAppDispatch, useAppSelector } from 'src/Redux/Hooks';
import { getEmployees } from 'src/Redux/Slices/EmployeesSlice';
import axios from 'axios';

const EmployeeListContainer = () => {
    const dispatch = useAppDispatch()
    const { Emloyees } = useAppSelector(state => state.employees)
    console.log(Emloyees)
    const url = "localhost:7000/employee"

    useEffect(() => {
        dispatch(getEmployees())
        console.log(getEmployees.type)

        // let callAPI = async () => {
        //     const data = await getRequest("/")
        //     console.log(data)
        // };
        // callAPI()
    }, [])


    return (
        <EmployeeList />
    )
}

export default EmployeeListContainer
