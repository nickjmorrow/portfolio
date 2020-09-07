// external
import styled from "styled-components";
import { theme } from "modules/theming/theme";

export const Card = styled.div`
  box-shadow: ${theme.boxShadow.bs3};
  border-radius: ${theme.borderRadius.br1};
  background-color: white;
  opacity: 0.8;
  z-index: 1;
  padding: ${theme.spacing.ss8};
`;
