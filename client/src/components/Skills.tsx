import * as React from 'react';
import { Header } from './shared/Header';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import {
	Paper,
	ExpansionPanel,
	Typography,
	Theme,
	CSharpIcon,
	SQLServerIcon,
	ReactJSIcon,
	NodeJSIcon,
	MongoDBIcon,
	NETCoreIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	GitIcon,
	ReduxIcon,
	PostgreSQLIcon,
	JenkinsCIIcon,
	StyledComponentsIcon,
	JestIcon,
	SeleniumIcon,
	PythonIcon,
	GoIcon,
	WebpackIcon,
	RollupIcon,
	GatsbyIcon,
	useThemeContext,
} from '@nickjmorrow/react-component-library';
import { getTitleCased } from '../utilities';
import { SkillLevel } from '../constants';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Technology, TechnologyType } from '../types';

export const GatsbyQuery = graphql`
	{
		data {
			technologies {
				name
				version
				orderId
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

export const Skills: React.FC = () => {
	const theme = useThemeContext();
	const { data } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
	if (data === null) {
		return null;
	}

	const { technologies } = data;
	const technologyTypes = technologies.reduce<TechnologyType[]>((agg, cur) => {
		if (agg.findIndex(tti => tti.technologyTypeId === cur.technologyType.technologyTypeId) === -1) {
			agg.push(cur.technologyType);
		}
		return agg;
	}, []);

	return (
		<div
			style={{
				margin: '0 auto',
				position: 'relative',
				minHeight: '60vh',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'white',
			}}
		>
			<div>
				<Header link="#skills" id="skills">
					Skills
				</Header>
				<DelayedSlideInFade enterTimeout={1000} style={{ padding: '16px 0' }}>
					<Paper style={{ minWidth: theme.spacing.ss128 }}>
						<TechnologiesWrapper theme={theme}>
							{technologyTypes
								.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))
								.map(tti => {
									const relevantTechnologies = technologies.filter(
										t => t.technologyType.technologyTypeId === tti.technologyTypeId,
									);
									const proficientTechnologies = relevantTechnologies.filter(
										rt => rt.skillLevel.skillLevelId === SkillLevel.Proficient,
									);
									const familiarTechnologies = relevantTechnologies.filter(
										rt => rt.skillLevel.skillLevelId === SkillLevel.Familiar,
									);

									const technologyTypeLabel = proficientTechnologies
										.filter(rt => rt.orderId !== null)
										.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))[0];

									return (
										<ExpansionPanel
											styleApi={{
												wrapperStyle: {
													boxShadow: 'none',
													padding: '0 16px',
												},
											}}
											isFullWidth={true}
											rightComponent={() => iconMap[technologyTypeLabel.name]}
											visibleContent={
												<Typography sizeVariant={5} colorVariant={'primaryDark'}>
													{getTitleCased(tti.name)}
												</Typography>
											}
											hiddenContent={
												<div style={{ display: 'flex', flexFlow: 'row' }}>
													<TechnologyList
														title={'Proficient'}
														technologies={proficientTechnologies}
													/>
													<TechnologyList
														title={'Familiar'}
														technologies={familiarTechnologies}
													/>
												</div>
											}
										/>
									);
								})}
						</TechnologiesWrapper>
					</Paper>
				</DelayedSlideInFade>
			</div>
		</div>
	);
};

const TechnologyList: React.FC<{ technologies: Technology[]; title: string }> = ({ technologies, title }) => {
	const theme = useThemeContext();
	return (
		<div>
			<div style={{ marginBottom: theme.spacing.ss4 }}>
				<Typography>{title}</Typography>
			</div>
			{technologies
				.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))
				.map(rt => (
					<div
						key={rt.technologyId}
						style={{
							display: 'flex',
							marginBottom: '16px',
							opacity: rt.skillLevel.skillLevelId === SkillLevel.Proficient ? 1 : 0.6,
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							{iconMap[rt.name]}
						</div>
						<div style={{ paddingRight: '64px' }}>
							<div style={{ paddingRight: '16px' }}>
								<Typography style={{ marginLeft: '8px' }}>{rt.name}</Typography>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

const TechnologiesWrapper = styled('ul')<{ theme: Theme }>`
	margin: 0;
	display: flex;
	flex-direction: column;
`;

const iconSizeVariant = 3;

const iconMap = {
	'C#': <CSharpIcon sizeVariant={iconSizeVariant} />,
	'SQL Server': <SQLServerIcon sizeVariant={iconSizeVariant} />,
	React: <ReactJSIcon sizeVariant={iconSizeVariant} />,
	'Node.js': <NodeJSIcon sizeVariant={iconSizeVariant} />,
	MongoDB: <MongoDBIcon sizeVariant={iconSizeVariant} />,
	'.NET Core': <NETCoreIcon sizeVariant={iconSizeVariant} />,
	JavaScript: <JavaScriptIcon sizeVariant={iconSizeVariant} />,
	TypeScript: <TypeScriptIcon sizeVariant={iconSizeVariant} />,
	Git: <GitIcon sizeVariant={iconSizeVariant} />,
	Redux: <ReduxIcon sizeVariant={iconSizeVariant} />,
	PostgreSQL: <PostgreSQLIcon sizeVariant={iconSizeVariant} />,
	'Jenkins CI': <JenkinsCIIcon sizeVariant={iconSizeVariant} />,
	'Styled Components': <StyledComponentsIcon style={{ fontSize: '22px' }} />,
	Jest: <JestIcon sizeVariant={iconSizeVariant} />,
	Selenium: <SeleniumIcon sizeVariant={iconSizeVariant} />,
	'REST Services': <JestIcon sizeVariant={iconSizeVariant} />,
	Python: <PythonIcon sizeVariant={iconSizeVariant} />,
	Go: <GoIcon sizeVariant={iconSizeVariant} />,
	Webpack: <WebpackIcon sizeVariant={iconSizeVariant} />,
	Rollup: <RollupIcon sizeVariant={iconSizeVariant} />,
	Gatsby: <GatsbyIcon sizeVariant={iconSizeVariant} />,
};
