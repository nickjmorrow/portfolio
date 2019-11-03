import styled from 'styled-components';
import Img from 'gatsby-image';
import { Theme } from '@nickjmorrow/react-component-library';

export const StyledImage = styled(Img)<{ shouldRightAlign: boolean; theme: Theme }>`
	background-color: lightblue;
	opacity: 0.2;
	position: absolute;
	${p => (p.shouldRightAlign ? 'left: 0' : 'right: 0')};
	top: 0;
	left: 0;
	z-index: 0;
	box-shadow: ${p => p.theme.boxShadow.bs2};
	transition: all ${p => p.theme.transitions.medium};
	top: 0px;
	cursor: pointer;
	&: hover {
		top: -4px;
		box-shadow: ${p => p.theme.boxShadow.bs3};
		transition: all ${p => p.theme.transitions.medium};
		background-color: ${p => p.theme.colors.background};
		opacity: 1;
	}
`;
