import styled from 'styled-components';
import Img from 'gatsby-image';
import { Theme } from '@nickjmorrow/react-component-library';

export const StyledImage = styled(Img)<{ shouldRightAlign: boolean; theme: Theme }>`
	background-color: lightblue;
	opacity: 0.5;
	width: 60%;
	height: 100%;
	max-width: 400px;
	position: absolute;
	${p => (p.shouldRightAlign ? 'left: 0' : 'right: 0')};
	top: 0;
	z-index: 0;
	box-shadow: ${p => p.theme.boxShadow.bs2};
`;
