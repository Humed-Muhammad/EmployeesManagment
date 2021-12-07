import AddEmployee from './AddEmployee'
import { useAppDispatch, useAppSelector } from 'src/Redux/Hooks'
import { addingEmployee, createEmployee, getEmployeeData, getEmployees } from 'src/Redux/Slices/EmployeesSlice'

const AddEmployeeContainer = () => {
    const dispatch = useAppDispatch()
    const handleSubmit = (data:Object) =>{
        dispatch( getEmployeeData(data))
    }
    return (
        <AddEmployee handleSubmit={handleSubmit} />
    )
}

export default AddEmployeeContainer
