import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Technology, Theme } from '../types';
import { BulletPoint } from './shared/BulletPoint';
import { Typography, StyleConstant, useThemeContext, ArrowIcon, CSharpIcon, SQLServerIcon, ReactJSIcon, NodeJSIcon, MongoDBIcon, NETCoreIcon, JavaScriptIcon, TypeScriptIcon } from '@nickjmorrow/react-component-library';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
export const GatsbyQuery = graphql`
	{
		data {
			technologies {
				name
				version
			}
		}
	}
`;

export const Technologies : React.FC = () => {
	const { data } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
	if (data === null) {
		return null;
	}
	const { technologies } = data;
	const theme = useThemeContext();
	return (
		<DelayedSlideInFade enterTimeout={1000}>
			<div>
							<TechnologiesWrapper theme={theme}>
								{technologies.map((t, i) => (
									<DelayedSlideInFade enterTimeout={i * 100}>
										<TechnologyWrapper key={i}>
											{iconMap[t.name]}
											{/* <ArrowIcon sizeVariant={1} style={{ marginRight: '6px' }} /> */}
											<div style={{display: 'flex', justifyContent: 'flex-start', width: '180px'}}>
												<Typography>{t.name}</Typography>
											</div>
										</TechnologyWrapper>
									</DelayedSlideInFade>
								))}
							</TechnologiesWrapper>
						</div>
		</DelayedSlideInFade>
	)
}


const TechnologiesWrapper = styled('ul')<{ theme: Theme}>`
	display: grid;
	grid-template-columns: repeat(2, ${p => p.theme.spacing.ss48});
	margin: 0;
	margin-top: ${p => p.theme.spacing.ss12};
	margin-bottom: ${p => p.theme.spacing.ss24};
`;

const TechnologyWrapper = styled.li`
	list-style-type: none;
	margin: 0;
	display: flex;
	align-items: center;
	margin: 4px 0;
	width: 220px;
	justify-content: space-between;
`;

const iconMap = {
	'C#': <CSharpIcon sizeVariant={3} />,
	'SQL Server': <SQLServerIcon sizeVariant={3} />,
	'React': <ReactJSIcon sizeVariant={3} />,
	'Node.js': <NodeJSIcon sizeVariant={3} />,
	'MongoDB': <MongoDBIcon sizeVariant={3} />,
	'.NET Core': <NETCoreIcon sizeVariant={3} />,
	'JavaScript': <JavaScriptIcon sizeVariant={3} />,
	'TypeScript': <TypeScriptIcon sizeVariant={3} />,
}