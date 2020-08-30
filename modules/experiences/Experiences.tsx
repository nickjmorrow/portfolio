// external
import React from "react";
import styled from "styled-components";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";
import { Container } from "modules/core/Container";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";

export const Experiences: React.FC = () => {
  return (
    <Container>
      <Diagonal colorScheme={diagonalColors.warm} variant={"alternate"}>
        Experiences
      </Diagonal>
      <Card />
    </Container>
  );
};
