// external
import styled from "styled-components";
import { theme } from "modules/theming/theme";

export const Card = styled.div`
  margin: 0 ${theme.spacing.ss4};
  box-shadow: ${theme.boxShadow.bs3};
  border-radius: ${theme.borderRadius.br1};
  width: 80%;
  min-height: 400px;
  background-color: white;
`;
