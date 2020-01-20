import { Typography, useThemeContext, Theme } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { DelayedSlideInFade } from '../Core/DelayedSlideInFade';
import { HeaderTypography } from '../Core/Header';
import { moduleHeight } from '../../core/constants';

// TODO: Why am I hitting key errors when using technologyId?
export const About: React.FC = () => {
	const theme = useThemeContext();
	return (
		<AboutWrapper theme={theme}>
			<HeaderTypography link="#about" id="about">
				About
			</HeaderTypography>
			<div style={{ marginBottom: theme.spacing.ss24 }}>
				<StyledTypography theme={theme}>
					Hi! I'm Nick, and I live and work in New York. I enjoy creating web applications with an emphasis on
					user experience and code quality.
				</StyledTypography>
				<StyledTypography theme={theme}>
					Shortly after graduating from University of Virginia, I joined an engineering team at Mastercard
					focused on empowering financial institutions to make data-driven decisions based on a web app that
					would allow for exploration of the Mastercard transaction log.
				</StyledTypography>
			</div>
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
	justify-content: center;
	background-color: ${p => p.theme.colors.background};
	margin: 0 auto;
	height: 90vh;
	display: flex;
	max-width: ${p => p.theme.spacing.ss192};
`;
