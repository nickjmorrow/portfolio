import { ExpansionPanel, Paper, Theme, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { iconMap, SkillLevel } from '../../core/constants';
import { Technology, TechnologyType } from '../../types';
import { getTitleCased } from '../../utilities';
import { HeaderTypography } from '../Core/Header';

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
		<SkillsWrapper>
			<div>
				<HeaderTypography link="#skills" id="skills">
					Skills
				</HeaderTypography>
				<Paper style={{ minWidth: theme.spacing.ss192, marginBottom: '6px' }}>
					<TechnologiesWrapper theme={theme}>
						{technologyTypes
							.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))
							.map(tti => {
								const relevantTechnologies = technologies.filter(
									t => t.technologyType.technologyTypeId === tti.technologyTypeId,
								);

								const technologyTypeLabel = relevantTechnologies
									.filter(
										rt =>
											rt.skillLevel.skillLevelId === SkillLevel.Proficient && rt.orderId !== null,
									)
									.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))[0];

								return (
									<ExpansionPanel
										key={tti.technologyTypeId}
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
												<TechnologyList technologies={relevantTechnologies} />
											</div>
										}
									/>
								);
							})}
					</TechnologiesWrapper>
				</Paper>
			</div>
		</SkillsWrapper>
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

const SkillsWrapper = styled('section')<{ theme: Theme }>`
	margin: 0 auto;
	margin-bottom: 16px;
	position: relative;
	min-height: 90vh;
	display: flex;
	justify-content: center;
	background-color: white;
`;
