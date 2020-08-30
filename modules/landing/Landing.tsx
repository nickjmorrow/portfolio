// external
import React from "react";
import styled from "styled-components";
import { Diagonal } from "modules/core/Diagonal";
import { diagonalColors } from "modules/core/diagonalColors";

export const Landing: React.FC = () => {
  return (
    <Container>
      <Diagonal colorScheme={diagonalColors.cold} variant={"default"} />
      Landing
      <Diagonal colorScheme={diagonalColors.cold} variant={"alternate"} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;
