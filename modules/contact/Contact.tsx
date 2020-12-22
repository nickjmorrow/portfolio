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
import { CardHeader } from "modules/core/CardHeader";

export const Contact: React.FC = () => {
  return (
    <CustomContainer id="contact">
      <CustomCard>
        <CardHeader>Contact</CardHeader>
        <Content>
          Although I'm not actively looking for new opportunities, my inbox is
          always open. Whether for a potential project or just to connect, I'll
          try my best to answer your email!
        </Content>
        <GetInTouchButton>Get In Touch</GetInTouchButton>
      </CustomCard>
      <Diag />
      <SecondDiag />
      <ThirdDiag />
    </CustomContainer>
  );
};

const altColor = "hsl(169.9, 70%, 71.1%)";

const Diag = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${altColor};
  position: absolute;
  transform: skewY(5deg) scale(1, 2);
`;

const SecondDiag = styled.div`
  height: 80px;
  width: 100%;
  background-color: hsl(333, 100%, 71.1%);
  position: absolute;
  transform: skewY(10deg) scale(1, 2);
`;

const ThirdDiag = styled.div`
  height: 80px;
  width: 100%;
  background-color: hsl(37, 100%, 71.1%);
  position: absolute;
  transform: skewY(15deg) scale(1, 2);
`;

const CustomCard = styled(Card)`
  height: 400px;
  width: 50%;
  background-color: hsla(0, 0%, 10%, 0.8);
  backdrop-filter: blur(6px);
`;

const Content = styled(Typography)`
  display: block;
  margin: ${theme.spacing.ss16} 0;
  color: white;
  line-height: 36px;
`;

const GetInTouchButton = styled(Button)`
  background-color: hsl(45, 90%, 50%);
  padding: ${theme.spacing.ss4} ${theme.spacing.ss6};
  font-size: ${theme.fontSizes.fs2};
`;

const CustomContainer = styled(Container)`
  background-color: ${theme.neutralColor.cs9};
  overflow: none;
`;
