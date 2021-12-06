import { Container, Text, Card, Avatar, Button } from "src/Components/StyledComponent";
import { colors } from "src/Utils/Colors";
import one from "src/Assets/Images/one.png"
import { TrashIcon, PencilIcon } from "@heroicons/react/outline"
import { Divider } from "src/Components/StyledComponent/Divider";
import {ResponseDataTypes} from "src/Utils/Types"
import { toogleModal } from "src/Redux/Slices/uiStateSlice";
import { useAppDispatch } from "src/Redux/Hooks";
import React from "react";

const EmployeeList:React.FC<{data:ResponseDataTypes}> = ({data}) => {
  const dispatch = useAppDispatch()
  return (
    <Container justify="flex-start" direction="column" flex={1} marginTop="20px">
      <Container justify="flex-end">
        <Button onClick={()=>dispatch(toogleModal())}  padding="10px">
          Add Employee
        </Button>
      </Container>
      <Container  height="60px" justify="space-around">
        <Text>Employee</Text>
        <Text>Gender</Text>
        <Text>Salary</Text>
        <Text>Birth date</Text>
        <Text>Manage</Text>
      </Container>
      <Container marginTop="5px">
        <Card justify="space-around" height="60px" width="100%" >
          <Container width="50px">
          <Avatar src={one} />
          <Divider spacing="5px" height="30px" thickness="1px" direction="vertical" color={colors.yellow}  />
          <Text size="13px">{data.name}</Text>
          </Container>
          <Text>{data.gender}</Text>
          <Text>{data.salary}</Text>
          <Text> {data.birth_date} </Text>
          <Container justify="space-around" width="50px">
              <PencilIcon style={{cursor:"pointer"}} height="20px" color={colors.lightGray} />
              <Divider spacing="3px" height="30px" thickness="1px" direction="vertical" color={colors.yellow}  />
              <TrashIcon style={{cursor:"pointer"}}  width="20px" color={colors.red}/>
          </Container>
        </Card>
      </Container>
    </Container>
  );
};

export default EmployeeList;
