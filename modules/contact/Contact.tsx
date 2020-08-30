// external
import React from "react";
import styled from "styled-components";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { Card } from "modules/core/Card";

export const Contact: React.FC = () => {
  return (
    <Container>
      <Diagonal colorScheme={diagonalColors.hard} variant={"default"} />
      <InnerContainer>
        <Diagonal colorScheme={diagonalColors.hard} variant={"alternate"} />
        <Card>Contact</Card>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`;

const InnerContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
  overflow-y: hidden;
  width: 100%;
`;
