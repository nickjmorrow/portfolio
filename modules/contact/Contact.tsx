// external
import React from "react";
import styled from "styled-components";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";
import { Container } from "modules/core/Container";

export const Contact: React.FC = () => {
  return (
    <Container>
      <Diagonal colorScheme={diagonalColors.hard} variant={"default"}>
        Contact
      </Diagonal>
      <Card />
    </Container>
  );
};
