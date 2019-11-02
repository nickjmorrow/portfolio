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
				<Image fileName={project.fileName} url={project.d} />
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
						style={{ marginBottom: theme.spacing.ss6, display: 'block', maxWidth: '60%' }}
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
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	height: 400px;
	justify-content: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	align-items: center;
	margin: 96px 0;
`;

const ProjectInfoWrapper = styled('div')<{ shouldRightAlign: boolean }>`
	display: flex;
	grid-column: 7 / -1;
	align-items: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	text-align: ${p => (p.shouldRightAlign ? 'right' : 'left')};
	flex-direction: column;
`;

const Description = styled('div')<{ theme: Theme }>`
	background-color: ${p => p.theme.colors.neutral.cs2};
	padding: 16px;
	border-radius: ${p => p.theme.border.borderRadius.br1};
	margin-bottom: ${p => p.theme.spacing.ss6};
	box-shadow: ${p => p.theme.boxShadow.bs1};
	z-index: 1;
`;

const Name = styled.div``;

const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60px;
`;
