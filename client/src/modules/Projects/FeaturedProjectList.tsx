import * as React from 'react';
import { Project } from '../../types';
import { Typography } from '@nickjmorrow/react-component-library';
import { FeaturedProject } from './FeaturedProject';
import styled from 'styled-components';
import { HeaderTypography } from '../Core/Header';

export const FeaturedProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<FeaturedProjectListWrapper>
			<InnerWrapper>
				<HeaderTypography id="wpork" Text="#work">
					Work
				</HeaderTypography>
				<Typography styleVariant={'h2'} style={{ margin: '0' }}>
					Featured Projects
				</Typography>
				{projects.map((p, i) => (
					<FeaturedProject key={p.projectId} project={p} rightAlign={i % 2 === 0} />
				))}
			</InnerWrapper>
		</FeaturedProjectListWrapper>
	);
};

const FeaturedProjectListWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 72px;
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
