import styled from "styled-components";
import { Typography } from "modules/core/Typography";
import { theme } from "modules/theming";

export const Name = styled(Typography)`
  display: block;
  font-weight: bold;
  font-size: ${theme.fontSizes.fs6};
  color: ${theme.neutralColor.cs9};
  z-index: 1;
`;
