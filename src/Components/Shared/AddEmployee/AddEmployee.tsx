import { useState } from 'react'
import DatePicker from "react-datepicker";
import { Card, Container, Input, Text } from 'src/Components/StyledComponent'
import "react-datepicker/dist/react-datepicker.css";
import { XIcon } from "@heroicons/react/outline"

const AddEmployee = () => {
    const [employeeData, setEmployeeData] = useState({
        name: "",
        gender: "",
        salary: "",
        birth_date: new Date()
    })
    return (
        <Container height="100%" position="absolute" >
            <Card justify="space-around" direction="column" width="60%" height="400px">
               <Container position="absolute" width="40px">
               <XIcon width="20px" />
               </Container>
               <Text weight="bold" size="30px">Add an employee</Text>
               <Container justify="space-around">
                <Input width="40%" height="40px" onChange={({target:{value}})=>setEmployeeData({...employeeData, name:value})} placeholder="Name" />
                <Input width="40%" height="40px" onChange={({target:{value}})=>setEmployeeData({...employeeData, gender:value})} placeholder="Genger" />
               </Container>
               <Container justify="space-around">
               <Input width="40%" height="40px" onChange={({target:{value}})=>setEmployeeData({...employeeData, salary:value})} placeholder="Salary" />
                <DatePicker  wrapperClassName="datePicker"  selected={employeeData.birth_date} onChange={(date:Date) => setEmployeeData({ ...employeeData, birth_date: date })} />
               </Container>

            </Card>
        </Container>
    )
}

export default AddEmployee
