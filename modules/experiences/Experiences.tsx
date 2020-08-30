// external
import React from "react";
import styled from "styled-components";
import { Card } from "modules/core/Card";

export const Experiences: React.FC = () => {
  return (
    <Container>
      <Card>Experiences</Card>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;
