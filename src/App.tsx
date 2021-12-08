import Navbar from "src/Components/Shared/Navbar/Navbar";
import { Container, Text } from "src/Components/StyledComponent";
import Employess from "src/Components/Shared/EmployeeLIst/EmployeeListContainer";
import { useAppSelector } from "src/Redux/Hooks";
import AddEmployeeContainer from "./Components/Shared/AddEmployee/AddEmployeeContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Online, Offline} from "react-detect-offline"
import { InformationCircleIcon } from "@heroicons/react/outline"
import { colors } from "./Utils/Colors";
const App = () => {

  const {openModal} = useAppSelector(state=>state.uiState)
  console.log(openModal)
  return (
    <Container
      height="100vh"
      padding="0px"
    >
     <Online>
     <Container width="80vw" justify="flex-start"  direction="column" height="100vh">
      <Navbar />
      <Employess />
      </Container>
     </Online>
     <Offline>
       
       <Container direction="column" >
       <InformationCircleIcon width="50px" color={colors.red} />
        <Text>Oppss! You are offline please connect to the internate</Text>
       </Container>
     </Offline>
      <ToastContainer/>
      {openModal&&<AddEmployeeContainer/>}
    </Container>
  );
};

export default App;
