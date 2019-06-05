import * as React from 'react';
import { Project } from '../types';
import styled from 'styled-components';


export const FeaturedProject : React.FC<{project: Project; rightAlign: boolean}> = ({project, rightAlign}) => {
	return (<FeaturedProjectWrapper shouldRightAlign={rightAlign}>
		<Image shouldRightAlign={rightAlign}/>
		<ProjectInfoWrapper>
			<Name>{project.name}</Name>
			<Description>{'Project description lorem ipsum'}</Description>
			<TechnologyList>{project.technologies.map(t => t.name).join(", ")}</TechnologyList>
			<Links>{'Link 1, Link 2'}</Links>
		</ProjectInfoWrapper>
	</FeaturedProjectWrapper>);
}

const FeaturedProjectWrapper = styled('div')<{shouldRightAlign: boolean}>`
	position: relative;
	height: 200px;
	display: flex;
	justify-content: ${p => p.shouldRightAlign ? 'flex-end' : 'flex-start'};
	align-items: center;
	margin: 0 auto 64px auto;
	text-align: ${p => p.shouldRightAlign ? 'right' : 'left'};
	max-width: 700px;
`;

const ProjectInfoWrapper = styled.div`
`;

const Description = styled.div`
	background-color: rgba(0, 0, 0, 0.1);
	padding: 8px;
	border-radius: 6px;
`;

const Name = styled.div`

`;

const TechnologyList = styled.div`
	
`;

const Links = styled.div`
	
`;

const Image = styled('div')<{shouldRightAlign: boolean}>`
	background-color: lightblue;
	opacity: 0.5;
	width: 50%;
	min-height: 200px;
	max-height: 300px;
	max-width: 400px;
	position: absolute;
	${p => p.shouldRightAlign ? 'left: 0' : 'right: 0'};
	top: 0;
	z-index: -1;
`;