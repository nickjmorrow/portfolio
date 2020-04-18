import { Theme, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { moduleHeight } from '../../core/constants';
import { HeaderTypography } from '../Core/Header';

// TODO: Why am I hitting key errors when using technologyId?
export const About: React.FC = () => {
	const theme = useThemeContext();
	return (
		<AboutWrapper theme={theme} style={{ margin: '0 auto' }}>
			<InnerWrapper>
				<HeaderTypography link="#about" id="about">
					About
				</HeaderTypography>
				<div style={{ maxWidth: theme.spacing.ss160, marginBottom: theme.spacing.ss24 }}>
					<StyledTypography theme={theme}>
						Hi! I'm Nick, and I live and work in New York. I enjoy creating web applications with an
						emphasis on user experience and code quality.
					</StyledTypography>
					<StyledTypography theme={theme}>
						Shortly after graduating from University of Virginia, I joined an engineering team at Mastercard
						focused on empowering financial institutions to make data-driven decisions based on a web app
						that would allow for exploration of the Mastercard transaction log.
					</StyledTypography>
				</div>
			</InnerWrapper>
		</AboutWrapper>
	);
};

const StyledTypography = styled(Typography)<{ theme: Theme }>`
	margin-bottom: ${p => p.theme.spacing.ss2};
	font-size: ${p => p.theme.typography.fontSizes.fs4};
	line-height: 1.5em;
	display: block;
`;

const AboutWrapper = styled('section')<{ theme: Theme }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 50vh;
	position: relative;
	background-color: ${p => p.theme.colors.background};
	min-height: ${moduleHeight};
	padding: ${p => p.theme.spacing.ss16};
	border: 1px solid red;
`;

const InnerWrapper = styled.div``;
