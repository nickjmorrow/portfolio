import {
	Typography,
	StyleConstant,
	useThemeContext,
	Button,
	Fade,
	GetComponentProps,
} from '@nickjmorrow/react-component-library';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { enterTimeout } from '../constants';
import { SlideInFade } from './shared/SlideInFade';

export const AppBar: React.FC = () => {
	const { spacing } = useThemeContext();
	return (

				<Fade in={true} appear={true} enterTimeout={enterTimeout.appBarAppears} styleKeys={['top']} unmounted={{top: '-100px'}} mounted={{top: '0px'}} style={{position: 'absolute'}} transitionVariant={'slow'}>
					<StyledAppBar spacing={spacing}>
						<SlideInFade enterTimeout={enterTimeout.aboutAppears}>
							<Typography sizeVariant={4}>About</Typography>
						</SlideInFade>
						<SlideInFade enterTimeout={enterTimeout.experienceAppears}>
							<Typography sizeVariant={4}>Experience</Typography>
						</SlideInFade>
						<SlideInFade enterTimeout={enterTimeout.workAppears}>
							<Typography sizeVariant={4}>Work</Typography>
						</SlideInFade>
						<SlideInFade enterTimeout={enterTimeout.contactAppears}>
							<Typography sizeVariant={4}>Contact</Typography>
						</SlideInFade>
						<SlideInFade enterTimeout={enterTimeout.resumeAppears}>
							<Button styleVariant={'secondary'}>Resume</Button>
						</SlideInFade>
					</StyledAppBar>
				</Fade>
			
		
	);
};

const StyledAppBar = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
	display: grid;
	flex-direction: row;
	justify-content: flex-end;
	grid-auto-flow: column;
	grid-column-gap: ${p => p.spacing.ss8};
	height: ${p => p.spacing.ss24};
	align-items: center;
	padding: 0 ${p => p.spacing.ss8};
	right: 0;
	left: 0;
	position: absolute;
	z-index: 1;
	background-color: white;
	opacity: 0.8;
`;
