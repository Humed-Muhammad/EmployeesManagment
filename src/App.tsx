import Navbar from "src/Components/Shared/Navbar/Navbar";
import { Container } from "src/Components/StyledComponent";
import Employess from "src/Components/Shared/EmployeeLIst/EmployeeListContainer";
import { useAppSelector } from "src/Redux/Hooks";
import AddEmployeeContainer from "./Components/Shared/AddEmployee/AddEmployeeContainer";

const App = () => {

  const {openModal} = useAppSelector(state=>state.uiState)
  console.log(openModal)
  return (
    <Container
      height="100vh"
      padding="0px"
    >
      <Container width="80%" justify="flex-start"  direction="column" height="100%">
      <Navbar />
      <Employess />
      </Container>
      {openModal&&<AddEmployeeContainer/>}
    </Container>
  );
};

export default App;
