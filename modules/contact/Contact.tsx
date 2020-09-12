// external
import React from "react";
import styled from "styled-components";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";
import { Container } from "modules/core/Container";
import { Typography } from "modules/core/Typography";
import { Button } from "modules/core/Button";

export const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <Diagonal colorScheme={diagonalColors.hard} variant={"default"}>
        Contact
      </Diagonal>
      <CustomCard>
        <Content>
          Although I'm not actively looking for new opportunities, my inbox is
          always open. Whether for a potential project or just to connect, I'll
          try my best to answer your email!
        </Content>
        <GetInTouchButton>Get In Touch</GetInTouchButton>
      </CustomCard>
    </Container>
  );
};

const CustomCard = styled(Card)`
  height: 400px;
  width: 50%;
`;

const Content = styled(Typography)``;

const GetInTouchButton = styled(Button)`
  background-color: hsl(260, 100%, 50%);
  padding: ${theme.spacing.ss4} ${theme.spacing.ss6};
  font-size: ${theme.fontSizes.fs2};
`;
