import * as React from 'react';
import { useThemeContext, Typography, InvisibleLink } from '@nickjmorrow/react-component-library';
import { Theme } from '@nickjmorrow/react-component-library/dist/typeUtilities';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const SideMenu: React.FC<{ navLinks: { route: string; label: string }[] }> = ({ navLinks }) => {
	const theme = useThemeContext();
	return (
		<StyledSideMenu theme={theme}>
			{navLinks.map(nl => (
				<AnchorLink key={nl.route} style={{ textDecoration: 'none' }} href={nl.route}>
					<LinkContainer theme={theme}>
						<StyledTypography colorVariant={'secondaryLight'} theme={theme} key={nl.route}>
							{nl.label}
						</StyledTypography>
					</LinkContainer>
				</AnchorLink>
			))}
		</StyledSideMenu>
	);
};

const StyledSideMenu = styled('div')<{ theme: Theme }>`
	height: 100vh;
	display: grid;
	grid-auto-flow: row;
`;

const StyledTypography = styled(Typography)<{ theme: Theme }>`
	display: block;
	padding: ${p => p.theme.spacing.ss4};
	color: inherit;
	transition: all ${p => p.theme.transitions.fast};
`;

const LinkContainer = styled('div')<{ theme: Theme }>`
	height: 100%;
	background-color: ${p => p.theme.colors.core.cs8};
	transition: all ${p => p.theme.transitions.medium};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${p => p.theme.colors.neutral.cs3};
	&: hover {
		background-color: ${p => p.theme.colors.core.cs6};
		transition: all ${p => p.theme.transitions.medium};
		color: ${p => p.theme.colors.neutral.cs1};
	}
`;
