import styled from "styled-components";
import { Typography } from "modules/core/Typography";
import { theme } from "modules/theming";

export const GradientText = styled(Typography)`
  background: linear-gradient(
    90deg,
    hsl(265.5, 100%, 71.1%),
    hsl(165.7, 100%, 71.1%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${theme.fontSizes.fs9};
  margin-bottom: ${theme.spacing.ss4};
  font-weight: bold;
`;
