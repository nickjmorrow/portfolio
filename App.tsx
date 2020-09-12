// external
import React from "react";
import styled from "styled-components";
import { Landing } from "modules/landing";
import { About } from "modules/about";
import { Experiences } from "modules/experiences";
import { Projects } from "modules/projects";
import { Contact } from "modules/contact";

export const App: React.FC = () => {
  return (
    <Container>
      <Landing />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  overflow-x: hidden;
`;
