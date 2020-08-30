// external
import React from "react";
import styled from "styled-components";
import { data } from "modules/core/data";
import { theme } from "modules/theming";

export const Skills: React.FC = () => {
  return (
    <Container>
      <SkillListContainer>
        {data.technologies.map(t => (
          <SkillContainer key={t.technologyId}>{t.name}</SkillContainer>
        ))}
      </SkillListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SkillListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0;
`;

const SkillContainer = styled.li`
  font-family: ${theme.fontFamilies.default};
  margin: ${theme.spacing.ss4} 0;
  display: flex;
  justify-content: flex-start;
`;
