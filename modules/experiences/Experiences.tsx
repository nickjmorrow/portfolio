// external
import React from "react";
import styled from "styled-components";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";

export const Experiences: React.FC = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: ${theme.backgroundColor};
`;
