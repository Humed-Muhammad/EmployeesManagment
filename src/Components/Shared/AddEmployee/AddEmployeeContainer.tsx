import AddEmployee from './AddEmployee'
import { useAppDispatch } from 'src/Redux/Hooks'
import { getEmployeeData, updateRequest } from 'src/Redux/Slices/EmployeesSlice'

const AddEmployeeContainer = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = (data:Object) =>{
        dispatch( getEmployeeData(data))
    }
    const handleUpdate = (data:Object) =>{
        dispatch( updateRequest(data))
    }
    return (
        <AddEmployee handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
    )
}

export default AddEmployeeContainer
