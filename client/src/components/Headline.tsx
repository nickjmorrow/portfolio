import * as React from "react";
import styled from "styled-components";
import { Button } from "@nickjmorrow/react-component-library";
import { SlideInFade } from "./shared/SlideInFade";
import { enterTimeout } from "../constants";

export const Headline: React.FC = () => {
  return (
    <SlideInFade enterTimeout={enterTimeout.et6}>
      <HeadlineWrapper>
        <div style={{ marginBottom: "48px" }}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <Button useMargin={false}>Get In Touch</Button>
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
