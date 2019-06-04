import * as React from "react";
import styled from "styled-components";
import {
  Button,
  Fade,
  StyleConstant,
  useThemeContext,
  Typography
} from "@nickjmorrow/react-component-library";
import { SlideInFade } from "./shared/SlideInFade";
import { enterTimeout } from "../constants";
import Img from "gatsby-image";

export const Headline: React.FC = () => {
  const { spacing } = useThemeContext();
  return (
    <SlideInFade enterTimeout={enterTimeout.et6}>
      <HeadlineWrapper>
        <div style={{ marginBottom: spacing.ss4 }}>
          <Fade in={true} appear={true} enterTimeout={enterTimeout.et7}>
            <Content spacing={spacing}>
              <div style={{marginBottom: '16px'}}>
				  <Typography>Hello, my name is</Typography>
			  </div>
			  <div>
				  <Typography styleVariant={1}>Nicholas Morrow</Typography>
			  </div>
			  <div>
				  <Typography>I like working with data and building things.</Typography>
			  </div>
            </Content>
          </Fade>
        </div>
        <SlideInFade enterTimeout={enterTimeout.et9}>
          <Button useMargin={false}>Get In Touch</Button>
        </SlideInFade>
      </HeadlineWrapper>
	  <img src="../images/cityscape.jpeg" />
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
