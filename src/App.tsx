import Navbar from "src/Components/Shared/Navbar/Navbar";
import { Container } from "src/Components/StyledComponent";
import Employess from "src/Components/Shared/EmployeeLIst/EmployeeListContainer";
const App = () => {
  return (
    <Container
      height="100vh"
      padding="0px"
    >
      <Container width="80%" justify="flex-start"  direction="column" height="100%">
      <Navbar />
      <Employess />
      </Container>
    </Container>
  );
};

export default App;
