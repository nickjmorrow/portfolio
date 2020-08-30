// external
import React from "react";
import styled from "styled-components";
import { Diagonal } from "modules/core/Diagonal";
import { diagonalColors } from "modules/core/diagonalColors";
import { Card } from "modules/core/Card";

export const Projects: React.FC = () => {
  return (
    <Container>
      <Diagonal colorScheme={diagonalColors.soft} variant={"default"} />
      <Card>Projects</Card>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`;
