// external
import React from "react";
import styled from "styled-components";

export const Image: React.FC = () => {
  return <StyledImage src="images/color_fade_wallpaper.jpg" />;
};

const StyledImage = styled.img`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
`;
