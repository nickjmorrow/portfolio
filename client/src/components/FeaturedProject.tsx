import { GithubIcon, Theme, Typography, useThemeContext, ShareIcon } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Project } from '../types';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { Image } from './images/Image';

export const FeaturedProject: React.FC<{ project: Project; rightAlign: boolean }> = ({ project, rightAlign }) => {
	const theme = useThemeContext();

	const rightAlignProxy = true;
	return (
		<DelayedSlideInFade enterTimeout={500}>
			<FeaturedProjectWrapper shouldRightAlign={rightAlignProxy}>
				<Image fileName={project.fileName} url={project.demoUrl} />
				<ProjectInfoWrapper shouldRightAlign={rightAlignProxy}>
					<Typography
						colorVariant={'primaryDark'}
						sizeVariant={5}
						weightVariant={7}
						style={{ marginBottom: theme.spacing.ss6 }}
					>
						{project.name}
					</Typography>
					<Description theme={theme}>
						<Typography>{project.tagline}</Typography>
					</Description>
					<Typography
						style={{ marginBottom: theme.spacing.ss6, display: 'block', maxWidth: '30%' }}
						sizeVariant={2}
						fontFamilyVariant={'monospace'}
					>
						{project.technologies.map(t => t.name).join(', ')}
					</Typography>
					<Links>
						<a href={project.githubUrl}>
							<GithubIcon sizeVariant={3} colorVariant={'secondaryDark'} style={{ display: 'block' }} />
						</a>
						<a href={project.demoUrl}>
							<ShareIcon
								sizeVariant={3}
								colorVariant={'secondaryDark'}
								style={{ transform: 'scale(1.6)', display: 'block' }}
							/>
						</a>
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

const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60px;
`;
