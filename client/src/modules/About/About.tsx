import { BulletPointTypography, Theme, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { ModuleCard } from '../Core/ModuleCard';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { moduleHeight } from '../../core/constants';
import { Technology } from '../../types';
import { HeaderTypography } from '../Core/Header';
import { Image } from '../Core/Image';
import { ModuleWrapper } from '../Core/ModuleWrapper';

export const GatsbyQuery = graphql`
	{
		data {
			technologies {
				name
				version
				orderId
				isFrontPage
				technologyType {
					technologyTypeId
					name
					orderId
				}
				skillLevel {
					skillLevelId
					description
				}
			}
		}
	}
`;
// TODO: Why am I hitting key errors when using technologyId?
export const About: React.FC = () => {
	const theme = useThemeContext();
	const { data } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
	return (
		<ModuleWrapper>
			<ModuleCard>
				<HeaderTypography link="#about" id="about">
					About
				</HeaderTypography>
				<Content>
					<Text>
						<Description>
							<StyledTypography>
								Hi! I'm Nick, and I live and work in New York. I enjoy creating web applications with an
								emphasis on user experience and code quality.
							</StyledTypography>
							<StyledTypography>
								Shortly after graduating from University of Virginia, I joined an engineering team at
								Mastercard focused on empowering financial institutions to make data-driven decisions
								based on a web app that would allow for exploration of the Mastercard transaction log.
							</StyledTypography>
						</Description>
						<Typography>Here are some technologies I've been working with recently:</Typography>
						<TechnologyList>
							{data.technologies
								.filter(t => t.isFrontPage)
								.map(t => (
									<TechnologyWrapper key={t.technologyId}>
										<BulletPointTypography key={t.technologyId}>{t.name}</BulletPointTypography>
									</TechnologyWrapper>
								))}
						</TechnologyList>
					</Text>
					{/* <ImagePlaceholder /> */}
					<div
						style={{
							height: '250px',
							width: '250px',
							borderRadius: theme.border.borderRadius.br2,
							overflow: 'hidden',
						}}
					>
						<Image fileName={'profile_picture.jpeg'} />
					</div>
				</Content>
			</ModuleCard>
		</ModuleWrapper>
	);
};

const TechnologyList = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 180px;
	margin-top: 32px;
`;

const TechnologyWrapper = styled.div`
	margin: ${p => p.theme.njmTheme.spacing.ss1} 0;
`;

const Description = styled.div`
	margin-bottom: ${p => p.theme.njmTheme.spacing.ss8};
`;

const StyledTypography = styled(Typography)`
	margin-bottom: ${p => p.theme.njmTheme.spacing.ss2};
	font-size: ${p => p.theme.njmTheme.typography.fontSizes.fs3};
	line-height: 1.5em;
	display: block;
`;

const Text = styled.div`
	max-width: 600px;
	margin-right: 32px;
	margin-bottom: 32px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;
