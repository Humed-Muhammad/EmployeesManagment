import { useEffect, useCallback } from 'react'
import EmployeeList from "./EmployeeList";
import { useAppDispatch, useAppSelector } from 'src/Redux/Hooks';
import { deleteEmployee, getEmployees } from 'src/Redux/Slices/EmployeesSlice';
import { selectEmployees } from 'src/Redux/MemoizedSelectors';
import { Button, Container, Text } from 'src/Components/StyledComponent';
import { PuzzleIcon } from "@heroicons/react/outline"
import { colors } from 'src/Utils/Colors';
import { toogleModal } from 'src/Redux/Slices/uiStateSlice';

const EmployeeListContainer = () => {
    const dispatch = useAppDispatch()
    const Employees = useAppSelector(selectEmployees)

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    const handleDelete = useCallback((id:string) =>{
        dispatch(deleteEmployee(id))
    },[])
    const List = Employees.map((item, index) => (
        <EmployeeList handleDelete={handleDelete} data={item} key={item['_id']} />
    ))

    return (
        <>
            {
                Employees.length < 1 ? (<Container flex={1} margin="20px">
                    <Container direction="column" height="150px" justify="space-around">
                        <PuzzleIcon width="60px" color={colors.yellow} />
                        <Text>You don't have yet employees!</Text>
                        <Button padding="10px" onClick={() => dispatch(toogleModal())} >Create one</Button>
                    </Container>
                </Container>) : (
                    <>
                        <Container marginTop="20px" justify="flex-end">
                            <Button onClick={() => dispatch(toogleModal())} padding="10px">
                                Add Employee
                            </Button>
                        </Container>
                        <Container height="60px" justify="space-around">
                            <Text>Employee</Text>
                            <Text>Gender</Text>
                            <Text>Salary</Text>
                            <Text>Birth date</Text>
                            <Text>Manage</Text>
                        </Container>
                        {List}
                    </>
                )
            }
        </>
    )
}

export default EmployeeListContainer
