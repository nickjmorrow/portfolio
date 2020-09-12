import { keyframes, css } from "styled-components";

const animate = keyframes`
	to {
		background-position: 50% 50%;
	}s
`;

export const animateRadialGradient = css`
  animation: ${animate} 5s infinite alternate;
`;
