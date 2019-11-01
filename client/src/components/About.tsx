import { Typography, useThemeContext, Theme } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { Header } from './shared/Header';

// TODO: Why am I hitting key errors when using technologyId?
export const About: React.FC = () => {
	const theme = useThemeContext();
	return (
		<AboutWrapper theme={theme}>
			<DelayedSlideInFade enterTimeout={500} style={{ margin: '0 auto', maxWidth: 'max-content' }}>
				<Header link="#about" id="about">
					About
				</Header>
				<div style={{ maxWidth: theme.spacing.ss160, marginBottom: theme.spacing.ss24 }}>
					<DelayedSlideInFade enterTimeout={250}>
						<StyledTypography theme={theme}>
							Hi! I'm Nick, and I live and work in New York. I enjoy creating web applications with an
							emphasis on user experience and code quality.
						</StyledTypography>
						<StyledTypography theme={theme}>
							Shortly after graduating from University of Virginia, I joined an engineering team at
							Mastercard focused on empowering financial institutions to make data-driven decisions based
							on a web app that would allow for exploration of the Mastercard transaction log.
						</StyledTypography>
					</DelayedSlideInFade>
				</div>
			</DelayedSlideInFade>
		</AboutWrapper>
	);
};

const StyledTypography = styled(Typography)<{ theme: Theme }>`
	margin-bottom: ${p => p.theme.spacing.ss2};
	line-height: 1.5em;
	display: block;
`;

const AboutWrapper = styled('section')<{ theme: Theme }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 50vh;
	position: relative;
	background-color: ${p => p.theme.colors.background};
	margin-top: 100vh;
	padding-top: ${p => p.theme.spacing.ss16};
	width: 100%;
`;
