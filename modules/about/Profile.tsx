// external
import React from "react";
import styled from "styled-components";
import { theme } from "modules/theming";

export const Profile: React.FC = () => {
  return <Container />;
};

const Container = styled.div`
  height: 300px;
  width: 300px;
  background-color: pink;
  border-radius: ${theme.borderRadius.br1};
`;
