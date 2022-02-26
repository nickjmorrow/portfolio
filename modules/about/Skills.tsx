// external
import React from "react";
import styled from "styled-components";
import { data } from "modules/core/data";
import { theme } from "modules/theming";
import { TechnologyLink } from "modules/about/TechnologyLink";
import { Technology } from 'modules/core/types'

export const Skills: React.FC = () => {
  return (
    <Container>
      <SkillListContainer>
        {data.technologies.sort((t1, t2) => t1.orderId < t2.orderId ? -1 : 1).map((t, i) => (
          <SkillContainer key={t.technologyId}>
            <TechnologyLink technology={t} index={i} />
          </SkillContainer>
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
  margin: ${theme.spacing.ss2} 0;
  display: flex;
  justify-content: flex-start;
`;
