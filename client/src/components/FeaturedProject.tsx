import { GithubIcon, Theme, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Project } from '../types';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';

export const FeaturedProject: React.FC<{ project: Project; rightAlign: boolean }> = ({ project, rightAlign }) => {
	const theme = useThemeContext();
	return (
		<DelayedSlideInFade enterTimeout={500}>
			<FeaturedProjectWrapper shouldRightAlign={rightAlign}>
				<Image theme={theme} shouldRightAlign={rightAlign} />
				<ProjectInfoWrapper shouldRightAlign={rightAlign}>
					<Typography colorVariant={'primaryDark'} sizeVariant={5} weightVariant={7} style={{ marginBottom: theme.spacing.ss6 }}>
						{project.name}
					</Typography>
					<Description theme={theme}>
						<Typography>
							{
								'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'
							}
						</Typography>
					</Description>
					<Typography
						style={{ marginBottom: theme.spacing.ss6, display: 'block', maxWidth: '30%' }}
						sizeVariant={2}
						fontFamilyVariant={'monospace'}
					>
						{project.technologies.map(t => t.name).join(', ')}
					</Typography>
					<Links>
						<GithubIcon sizeVariant={3} colorVariant={'secondaryDark'} />
					</Links>
				</ProjectInfoWrapper>
			</FeaturedProjectWrapper>
		</DelayedSlideInFade>
	);
};

const FeaturedProjectWrapper = styled('div')<{ shouldRightAlign: boolean }>`
	position: relative;
	height: 400px;
	display: flex;
	justify-content: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	align-items: center;
	max-width: 900px;
	margin: 32px auto 64px auto;
`;

const ProjectInfoWrapper = styled('div')<{ shouldRightAlign: boolean }>`
	display: flex;
	align-items: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	text-align: ${p => (p.shouldRightAlign ? 'right' : 'left')};
	flex-direction: column;
	z-index: 1;
`;

const Description = styled('div')<{ theme: Theme }>`
	background-color: ${p => p.theme.colors.neutral.cs2};
	padding: 16px;
	border-radius: ${p => p.theme.border.borderRadius.br1};
	width: 70%;
	margin-bottom: ${p => p.theme.spacing.ss6};
	box-shadow: ${p => p.theme.boxShadow.bs1};
`;

const Name = styled.div``;

const Links = styled.div``;

const Image = styled('div')<{ shouldRightAlign: boolean; theme: Theme }>`
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
