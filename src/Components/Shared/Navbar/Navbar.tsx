import React from "react";
import { colors } from "src/Utils/Colors";
import { Container, Text, Image, Card } from "src/Components/StyledComponent";
import logo from "src/Assets/Images/logo.png";
import man from "src/Assets/Images/man.png";

const Navbar = () => {
  return (
    <Card height="65px" width="100%" justify="space-around">
      <Image height="60px" width="60px" radius="50%" src={logo} />
      <Container width="10%">
        <Text size="20px" weight="Bold" color={colors.secondary}>
          Employee
        </Text>
        <Text size="20px" weight="Bold" color={colors.gray}>
          Managment
        </Text>
      </Container>
      <Container width="10%">
        <Image height="40px" width="40px" radius="50%" src={man} />
      </Container>
    </Card>
  );
};

export default Navbar;
