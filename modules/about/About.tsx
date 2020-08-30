// external
import React from "react";
import styled from "styled-components";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";
import { Skills } from "modules/about/Skills";
import { Profile } from "modules/about/Profile";
import { Container as OriginalContainer } from "modules/core/Container";

export const About: React.FC = () => {
  return (
    <Container>
      <Title>About</Title>

      <CustomCard>
        <Left>
          <Content>
            Hello! I'm Nick, and I live and work in New York. I'm passionate
            about building beautiful web applications with an emphasis on user
            experience with a modern feel. <br />
            <br />
            Shortly after graduating from University of Virginia with an
            entirely unrelated degree, I accrued experience in fintech and
            healthcare domains.
          </Content>
          <Skills />
        </Left>
        <Profile />
      </CustomCard>
    </Container>
  );
};

const Container = styled(OriginalContainer)`
  box-shadow: 0px -20px 30px hsla(0, 0%, 40%, 0.4);
`;

const Title = styled.span`
  font-family: ${theme.fontFamilies.title};
  font-size: ${theme.fontSizes.fs9};
  margin: ${theme.spacing.ss16} 0;
`;

const Content = styled.div`
  font-family: ${theme.fontFamilies.default};
  max-width: 600px;
  line-height: 1.5rem;
`;

const Left = styled.div``;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
