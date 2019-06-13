import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Technology, Theme, TechnologyType } from '../types';
import { BulletPoint } from './shared/BulletPoint';
import {
	Typography,
	SeleniumIcon,
	GitIcon,
	ReduxIcon,
	PostgreSQLIcon,
	JenkinsCIIcon,
	JestIcon,
	StyledComponentsIcon,
	useThemeContext,
	ArrowIcon,
	CSharpIcon,
	SQLServerIcon,
	ReactJSIcon,
	NodeJSIcon,
	MongoDBIcon,
	NETCoreIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	GithubIcon,
} from '@nickjmorrow/react-component-library';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
export const GatsbyQuery = graphql`
	{
		data {
			technologies {
				name
				version
				technologyType {
					technologyTypeId
					name
				}
			}
		}
	}
`;

export const TechnologyList: React.FC = () => {
	const { data } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
	if (data === null) {
		return null;
	}
	const { technologies } = data;
	const theme = useThemeContext();
	const technologyTypeIds = [...new Set(data.technologies.map(t => t.technologyType.technologyTypeId))];
	const technologyTypes = technologies.reduce<TechnologyType[]>((agg, cur) => {
		if (agg.findIndex(tti => tti.technologyTypeId === cur.technologyType.technologyTypeId) === -1) {
			agg.push(cur.technologyType)
		}
		return agg;
	}, []);
	return (
		<DelayedSlideInFade enterTimeout={1000}>
			<div style={{ width: '380px' }}>
				<TechnologiesWrapper theme={theme}>
					{technologyTypes.map(tti => {
						const relevantTechnologies = technologies.filter(
							t => t.technologyType.technologyTypeId === tti.technologyTypeId,
						);
						return (
							<TODONameMe>
								<Typography styleVariant={3}>{tti.name}</Typography>
								<RelevantTechnologyListWrapper theme={theme}>
									{relevantTechnologies.map((t, i) => (
										<DelayedSlideInFade enterTimeout={i * 100}>
											<TechnologyWrapper key={i} theme={theme}>
												{iconMap[t.name]}
												<div
													style={{
														display: 'flex',
														justifyContent: 'flex-start',
														width: '160px',
													}}
												>
													<Typography colorVariant={'inherit'}>{t.name}</Typography>
													<Typography colorVariant={'inherit'} style={{ marginLeft: '4px' }}>
														{t.version}
													</Typography>
												</div>
											</TechnologyWrapper>
										</DelayedSlideInFade>
									))}
								</RelevantTechnologyListWrapper>
							</TODONameMe>
						);
					})}
				</TechnologiesWrapper>
			</div>
		</DelayedSlideInFade>
	);
};

const TODONameMe = styled.div`
	margin: 32px 0;
`;

const TechnologiesWrapper = styled('ul')<{ theme: Theme }>`
	margin: 0;
`;

const TechnologyWrapper = styled('li')<{ theme: Theme }>`
	list-style-type: none;
	display: flex;
	align-items: center;
	padding: 8px;
	margin: 4px;
	width: 220px;
	justify-content: space-between;
	border-radius: 6px;
	cursor: pointer;
	color: ${p => p.theme.colors.neutral.cs5};
	transition: all ${p => p.theme.transitions.medium};
	&: hover {
		box-shadow: ${p => p.theme.boxShadow.bs1};
		transition: all ${p => p.theme.transitions.medium};
		color: ${p => p.theme.colors.core.cs5};
	}
`;

const iconMap = {
	'C#': <CSharpIcon sizeVariant={3} />,
	'SQL Server': <SQLServerIcon sizeVariant={3} />,
	React: <ReactJSIcon sizeVariant={3} />,
	'Node.js': <NodeJSIcon sizeVariant={3} />,
	MongoDB: <MongoDBIcon sizeVariant={3} />,
	'.NET': <NETCoreIcon sizeVariant={3} />,
	JavaScript: <JavaScriptIcon sizeVariant={3} />,
	TypeScript: <TypeScriptIcon sizeVariant={3} />,
	Git: <GitIcon sizeVariant={3} />,
	Redux: <ReduxIcon sizeVariant={3} />,
	PostgreSQL: <PostgreSQLIcon sizeVariant={3} />,
	'Jenkins CI': <JenkinsCIIcon sizeVariant={3} />,
	'Styled Components': <StyledComponentsIcon />,
	Jest: <JestIcon sizeVariant={3} />,
	Selenium: <SeleniumIcon sizeVariant={3} />,
};

const RelevantTechnologyListWrapper = styled('div')<{theme: Theme}>`
	display: flex;
	flex-direction: column;
`;