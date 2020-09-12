import styled from "styled-components";
import { theme } from "modules/theming";

export const Button = styled.button`
  padding: ${theme.spacing.ss4} ${theme.spacing.ss2};
  font-family: ${theme.fontFamilies.default};
  color: ${theme.backgroundColor};
  border-radius: ${theme.borderRadius.br1};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
