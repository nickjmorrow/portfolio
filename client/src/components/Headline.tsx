import * as React from "react";
import styled from "styled-components";
import {
  Button,
  Fade,
  StyleConstant,
  useThemeContext
} from "@nickjmorrow/react-component-library";
import { SlideInFade } from "./shared/SlideInFade";
import { enterTimeout } from "../constants";

export const Headline: React.FC = () => {
  const { spacing } = useThemeContext();
  return (
    <SlideInFade enterTimeout={enterTimeout.et6}>
      <HeadlineWrapper>
        <div style={{ marginBottom: spacing.ss4 }}>
          <Fade in={true} appear={true} enterTimeout={enterTimeout.et7}>
            <Content spacing={spacing}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Content>
          </Fade>
          <Fade in={true} appear={true} enterTimeout={enterTimeout.et8}>
            <Content spacing={spacing}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Content>
          </Fade>
        </div>
        <SlideInFade enterTimeout={enterTimeout.et9}>
          <Button useMargin={false}>Get In Touch</Button>
        </SlideInFade>
      </HeadlineWrapper>
    </SlideInFade>
  );
};

const HeadlineWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin: ${p => p.spacing.ss6} 0px;
`;
