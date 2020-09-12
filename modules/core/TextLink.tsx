import styled from "styled-components";
import { theme } from "modules/theming";

export const TextLink = styled.a`
  font-family: ${theme.fontFamilies.default};
  text-decoration: none;
  color: ${theme.coreColor.cs5};
  cursor: pointer;
  font-weight: 600;
  transition: all ${theme.transitions.fast};
  &:hover {
    color: ${theme.coreColor.cs3};
    transition: all ${theme.transitions.fast};
  }
`;
