// external
import React from "react";
import styled from "styled-components";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { Card } from "modules/core/Card";

export const About: React.FC = () => {
  return (
    <Container>
      <Diagonal colorScheme={diagonalColors.warm} variant={"alternate"} />
      <Card>About</Card>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`;
