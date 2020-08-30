// external
import styled from "styled-components";
import { theme } from "modules/theming";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  padding-bottom: ${theme.spacing.ss64};
  background-color: ${theme.backgroundColor};
`;
