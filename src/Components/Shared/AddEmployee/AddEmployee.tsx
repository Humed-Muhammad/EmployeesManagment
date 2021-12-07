import { useState } from 'react'
import DatePicker from "react-datepicker";
import { Button, Card, Container, Input, Text } from 'src/Components/StyledComponent'
import "react-datepicker/dist/react-datepicker.css";
import { XIcon } from "@heroicons/react/outline"
import { colors } from 'src/Utils/Colors';
import { toogleModal } from 'src/Redux/Slices/uiStateSlice';
import { useAppDispatch } from 'src/Redux/Hooks';

const AddEmployee:React.FC<{handleSubmit:Function}> = ({handleSubmit}) => {
    const [employeeData, setEmployeeData] = useState({
        name: "",
        gender: "",
        salary: "",
        birth_date: new Date()
    })

    const dispatch = useAppDispatch()

    return (
        <Container height="100%" position="absolute" >
            <Card justify="space-between" direction="column" width="60%" height="400px">
                <Container marginRight="10px" justify="flex-end" >
                    <XIcon cursor="pointer" onClick={()=>dispatch(toogleModal())} color={colors.red} width="20px" />
                </Container>
                <Text weight="bold" size="30px">Add an employee</Text>
                <Container justify="space-around">
                    <Input width="40%" height="40px" onChange={({ target: { value } }) => setEmployeeData({ ...employeeData, name: value })} placeholder="Name" />
                    <Input width="40%" height="40px" onChange={({ target: { value } }) => setEmployeeData({ ...employeeData, gender: value })} placeholder="Genger" />
                </Container>
                <Container justify="space-around">
                    <Input width="40%" height="40px" onChange={({ target: { value } }) => setEmployeeData({ ...employeeData, salary: value })} placeholder="Salary" />
                    <Container height="20px" width="40%" >
                        <DatePicker selected={employeeData.birth_date} onChange={(date: Date) => setEmployeeData({ ...employeeData, birth_date: date })} />
                    </Container>
                </Container>
               <Container margin="10px">
               <Button onClick={()=>handleSubmit(employeeData)} >Submit</Button>
               </Container>
            </Card>
        </Container>
    )
}

export default AddEmployee
