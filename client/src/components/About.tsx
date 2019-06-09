import { Typography, useThemeContext, Theme } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { Header } from './shared/Header';
import { TechnologyEmphasizedTypography } from './TechnologyEmphasizedTypography';
import { Technologies } from './TechnologyList';

// TODO: Why am I hitting key errors when using technologyId?
export const About: React.FC = () => {
	const theme = useThemeContext();
	return (
		<AboutWrapper id="about" theme={theme}>
			<DelayedSlideInFade enterTimeout={500}>
				<Header>About</Header>
				<div style={{ maxWidth: theme.spacing.ss160 }}>
					<TechnologyEmphasizedTypography
						text={'I enjoy using Redux. I also like using other technologies.'}
					/>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</Typography>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</Typography>
				</div>
				<Technologies />
			</DelayedSlideInFade>
		</AboutWrapper>
	);
};


const AboutWrapper = styled('div')<{theme: Theme}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	position: relative;
	margin-top: 100vh;
	padding: 0 64px;
	background-color: ${p => p.theme.colors.background};
`;
