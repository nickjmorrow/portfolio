import styled from "styled-components";
import { Typography } from "modules/core/Typography";
import { theme } from "modules/theming";
import { GradientText } from "modules/core/GradientText";

export const CardHeader = styled(GradientText)`
  font-size: ${theme.fontSizes.fs9};
  margin-bottom: ${theme.spacing.ss4};
  font-weight: 700;
`;
