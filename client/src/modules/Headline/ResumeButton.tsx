import * as React from 'react';
import { Button, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

export const ResumeButton: React.FC = () => {
	const theme = useThemeContext();
	return (
		<a
			rel="noopener noreferrer"
			style={{ textDecoration: 'none' }}
			target="_blank"
			href={withPrefix('/resume.pdf')}
			download
		>
			<StyledButton theme={theme} styleVariant={2}>
				<StyledTypography theme={theme}>Resume</StyledTypography>
			</StyledButton>
		</a>
	);
};

const StyledButton = styled(Button)<{ theme: Theme }>`
	border-color: ${p => p.theme.colors.background};
	background: -webkit-linear-gradient(60deg, hsl(178.3, 100%, 40%), hsl(288, 100%, 50%));
	padding: 12px 18px;
	margin: 0;
	&: hover {
		border-color: ${p => p.theme.colors.background};
	}
	&: active {
		border-color: ${p => p.theme.colors.background};
	}
`;

const StyledTypography = styled(Typography)<{ theme: Theme }>`
	color: ${p => p.theme.colors.background};
	font-weight: 800;
	font-size: 20px;
`;
