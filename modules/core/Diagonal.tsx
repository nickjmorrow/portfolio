import styled, { css, keyframes } from "styled-components";
import { theme } from "modules/theming";

interface Props {
  colorScheme: {
    first: string;
    second: string;
    third: string;
  };
  variant: "default" | "alternate";
}

const animate = keyframes`
	0% {
		background-position:10% 0%
	}
	50% {
		background-position:91% 100%
	}
	100% {
		background-position:10% 0%
	}
`;

const skew = 4;

export const Diagonal = styled("div")<Props>`
  animation: ${animate} 5s ease infinite;
  ${p => css`
    // position: absolute;
    height: 300px;
    width: 100%;
    transform-origin: 0;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fontSizes.fs10};
    font-family: ${theme.fontFamilies.title};
    color: ${theme.backgroundColor};
  `}
  ${p => getSwitchStyling(p)}
`;

const getSwitchStyling = ({ variant, colorScheme }: Props) => {
  switch (variant) {
    case "default":
      return css`
        transform: skewY(-${skew}deg);
        background: linear-gradient(
            150deg,
            ${colorScheme.first},
            ${colorScheme.second},
            ${colorScheme.third}
          )
          0% 0% / 200% 200%;
      `;
    case "alternate":
      return css`
        transform: skewY(-${skew}deg);
        background: linear-gradient(
            30deg,
            ${colorScheme.first},
            ${colorScheme.second},
            ${colorScheme.third}
          )
          0% 0% / 200% 200%;
      `;
  }
};
