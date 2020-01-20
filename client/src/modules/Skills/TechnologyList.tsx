import { ExpansionPanel, Paper, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { iconMap } from '../../core/constants';
import { Technology, TechnologyType, Theme } from '../../types';
import { getTitleCased } from '../../utilities';
import { DelayedSlideInFade } from '../Core/DelayedSlideInFade';
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
	const [isHoveringOverPopover, setIsHoveringOverPopover] = React.useState(false);

	const handlePopoverClose = (event: React.MouseEvent) => {
		if (isHoveringOverPopover) {
			return;
		}
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
		<DelayedSlideInFade enterTimeout={1000} style={{ padding: '16px 0' }}>
			<Paper style={{ minWidth: theme.spacing.ss128 }}>
				<TechnologyTypeWrapper theme={theme}>
					{technologyTypes
						.sort((a, b) => (a.orderId > b.orderId ? 1 : -1))
						.map(tti => {
							const relevantTechnologies = technologies.filter(
								t => t.technologyType.technologyTypeId === tti.technologyTypeId,
							);

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
									rightComponent={(isOpened: boolean) => iconMap[proficientTechnology.name]}
									visibleContent={
										<Typography sizeVariant={5} colorVariant={'primaryDark'}>
											{getTitleCased(tti.name)}
										</Typography>
									}
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
															<div style={{ paddingRight: '16px' }}>
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
				</TechnologyTypeWrapper>
			</Paper>
		</DelayedSlideInFade>
	);
};

const TechnologyTypeWrapper = styled('div')<{ theme: Theme }>`
	padding: 8px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	color: ${p => p.theme.colors.neutral.cs5};
	&: hover {
		color: ${p => p.theme.colors.core.cs5};
		transition: ${p => p.theme.transitions.fast} all;
	}
`;
