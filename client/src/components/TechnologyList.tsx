import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Technology, Theme, TechnologyType } from '../types';
import { Popover } from '@material-ui/core';
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
	PythonIcon,
	GoIcon,
	WebpackIcon,
	RollupIcon,
	GatsbyIcon,
	Paper,
	ExpansionPanel,
} from '@nickjmorrow/react-component-library';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { getTitleCased } from '../utilities';
import { SkillLevel } from '../constants';
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

export const TechnologyList: React.FC = () => {
	const { data } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
	if (data === null) {
		return null;
	}
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [currentTechnology, setTechnology] = React.useState<Technology>(null);

	const handlePopoverOpen = (event: React.MouseEvent, technology: Technology) => {
		event.preventDefault();
		setTechnology(technology);
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = (event: React.MouseEvent) => {
		console.log('closing');
		event.preventDefault();
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const { technologies } = data;
	const theme = useThemeContext();
	const technologyTypes = technologies.reduce<TechnologyType[]>((agg, cur) => {
		if (agg.findIndex(tti => tti.technologyTypeId === cur.technologyType.technologyTypeId) === -1) {
			agg.push(cur.technologyType);
		}
		return agg;
	}, []);
	return (
		<DelayedSlideInFade enterTimeout={1000} style={{ padding: '32px', display: 'flex', justifyContent: 'center' }}>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handlePopoverClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				disableRestoreFocus={true}
				style={{ pointerEvents: 'none', padding: '16px' }}
			>
				<Typography style={{ padding: '16px' }}>
					{currentTechnology && currentTechnology.skillLevel.description}
				</Typography>
			</Popover>
			<Paper style={{ minWidth: theme.spacing.ss128, padding: '16px 0' }}>
				<TechnologiesWrapper theme={theme}>
					{technologyTypes
						.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))
						.map(tti => {
							const relevantTechnologies = technologies.filter(
								t => t.technologyType.technologyTypeId === tti.technologyTypeId,
							);
							const proficientTechnology = relevantTechnologies
								.filter(rt => rt.orderId !== null)
								.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))[0];

							return (
								<ExpansionPanel
									styleApi={{
										wrapperStyle: {
											boxShadow: 'none',
										},
									}}
									rightComponent={(isOpened: boolean) => (
										<TechnologyTypeWrapper theme={theme}>
											<Typography sizeVariant={5} colorVariant={'inherit'}>
												{getTitleCased(tti.name)}
											</Typography>
											<ProficientIconTechnologyList>
												{<div>{iconMap[proficientTechnology.name]}</div>}
											</ProficientIconTechnologyList>
										</TechnologyTypeWrapper>
									)}
									hiddenContent={
										<div style={{ display: 'flex', flexFlow: 'column wrap' }}>
											{relevantTechnologies
												.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))
												.map(rt => (
													<div
														key={rt.technologyId}
														style={{
															marginLeft: '24px',
															display: 'flex',
															marginBottom: '16px',
															opacity:
																rt.skillLevel.skillLevelId === SkillLevel.Proficient
																	? 1
																	: 0.6,
														}}
													>
														<div
															style={{
																minWidth: '30px',
																display: 'flex',
																alignItems: 'center',
															}}
														>
															{iconMap[rt.name]}
														</div>
														<div
															onMouseLeave={handlePopoverClose}
															style={{ paddingRight: '64px' }}
														>
															<div
																onMouseEnter={event => handlePopoverOpen(event, rt)}
																style={{ paddingRight: '16px' }}
															>
																<Typography style={{ marginLeft: '8px' }}>
																	{rt.name}
																</Typography>
															</div>
														</div>
													</div>
												))}
										</div>
									}
								/>
							);
						})}
				</TechnologiesWrapper>
			</Paper>
		</DelayedSlideInFade>
	);
};

const TechnologyTypeWrapper = styled('div')<{ theme: Theme }>`
	padding: 8px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 450px;
	color: ${p => p.theme.colors.neutral.cs5};
	&: hover {
		color: ${p => p.theme.colors.core.cs5};
		transition: ${p => p.theme.transitions.fast} all;
	}
`;

const TechnologiesWrapper = styled('ul')<{ theme: Theme }>`
	margin: 0;
	display: flex;
	flex-direction: column;
`;

const ProficientIconTechnologyList = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 16px;
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
