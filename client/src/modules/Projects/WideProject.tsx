import * as React from 'react';
import { Project } from '../../types';
import { useThemeContext, Typography, GithubIcon, ShareIcon } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { Image } from '../Core/Image';
import { pageDimensions } from '../../core/constants';

export const WideProject: React.FC<{ project: Project }> = ({ project }) => {
	const theme = useThemeContext();

	return (
		<FeaturedProjectWrapper>
			<div
				style={{
					width: '75%',
					maxWidth: '700px',
					position: 'absolute',
					boxShadow: theme.boxShadow.bs1,
					borderRadius: '8px',
				}}
			>
				<Image style={{ borderRadius: '80px' }} fileName={project.fileName} url={project.demoUrl} />
			</div>
			<ProjectInfoWrapper>
				<Typography
					colorVariant={'primaryDark'}
					sizeVariant={5}
					weightVariant={7}
					style={{ marginBottom: theme.spacing.ss6 }}
				>
					{project.name}
				</Typography>
				<Card>
					<Description>
						<Typography>{project.tagline}</Typography>
					</Description>

					<Typography
						style={{ marginBottom: theme.spacing.ss1, display: 'block' }}
						sizeVariant={2}
						fontFamilyVariant={'monospace'}
					>
						{project.technologies.map(t => t.name).join(', ')}
					</Typography>
				</Card>
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
	);
};

const FeaturedProjectWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	height: 400px;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 64px;
	margin-top: 32px;
	overflow: hidden;
	max-width: ${pageDimensions.sectionMaxWidth};
`;

const ProjectInfoWrapper = styled.div`
	display: flex;
	grid-column: 7 / -1;
	align-items: flex-end;
	text-align: right;
	flex-direction: column;
	min-width: ${p => p.theme.njmTheme.spacing.ss64};
	position: relative;
	right: 0;
`;

const Card = styled.div`
	background-color: hsl(0, 0%, 96.6%);
	box-shadow: ${p => p.theme.njmTheme.boxShadow.bs2};
	padding: 16px;
	border-radius: ${p => p.theme.njmTheme.border.borderRadius.br1};
`;

const Description = styled.div`
	margin-bottom: ${p => p.theme.njmTheme.spacing.ss6};
	z-index: 1;
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60px;
	margin-top: ${p => p.theme.njmTheme.spacing.ss8};
`;
