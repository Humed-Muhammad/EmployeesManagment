import React from "react";
import { Container, Text, Card, Avatar } from "src/Components/StyledComponent";
import { colors } from "src/Utils/Colors";
import man from "src/Assets/Images/man.png"
import woman from "src/Assets/Images/woman.png"
import { TrashIcon, PencilIcon } from "@heroicons/react/outline"
import { Divider } from "src/Components/StyledComponent/Divider";
import {ResponseDataTypes} from "src/Utils/Types"

const EmployeeList:React.FC<{data:ResponseDataTypes, handleDelete:Function, handleUpdate:Function}> = ({data, handleDelete, handleUpdate}) => {
  return (
    <Container justify="flex-start" direction="column" marginTop="10px">
      <Container marginTop="5px">
        <Card justify="space-around" height="60px" width="100%" >
          <Container width="50px">
          <Avatar src={ (data.gender==="Male"||data.gender==="male")? man:woman} />
          <Divider spacing="5px" height="30px" thickness="1px" direction="vertical" color={colors.yellow}  />
          <Text size="13px">{data.name}</Text>
          </Container>
          <Text>{data.gender}</Text>
          <Text>{data.salary}</Text>
          <Text> {data.birth_date.substring(0, data.birth_date.indexOf(":"))} </Text>
          <Container justify="space-around" width="50px">
              <PencilIcon onClick={()=>handleUpdate(data['_id'])} style={{cursor:"pointer"}} height="20px" color={colors.lightGray} />
              <Divider  spacing="3px" height="30px" thickness="1px" direction="vertical" color={colors.yellow}  />
              <TrashIcon onClick={()=>handleDelete(data['_id'])} style={{cursor:"pointer"}}  width="20px" color={colors.red}/>
          </Container>
        </Card>
      </Container>
    </Container>
  );
};

export default EmployeeList;
