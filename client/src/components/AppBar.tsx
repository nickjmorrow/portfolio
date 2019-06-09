import { Fade, StyleConstant, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { enterTimeout } from '../constants';
import { Button } from './shared/Button';
import { SlideInFade } from './shared/SlideInFade';

export const AppBar: React.FC = () => {
	const { spacing } = useThemeContext();
	return (
		<Fade
			in={true}
			appear={true}
			enterTimeout={enterTimeout.appBarAppears}
			styleKeys={['top']}
			unmounted={{ top: '-100px' }}
			mounted={{ top: '0px' }}
			style={{ position: 'absolute' }}
			transitionVariant={'slow'}
		>
			<StyledAppBar spacing={spacing}>
				<AnchorLink href="#about" offset={'-52'}>
					<SlideInFade enterTimeout={enterTimeout.aboutAppears}>
						<Typography weightVariant={8} colorVariant={'primaryLight'} sizeVariant={4}>
							About
						</Typography>
					</SlideInFade>
				</AnchorLink>
				<AnchorLink href="#experience" offset={'300'}>
					<SlideInFade enterTimeout={enterTimeout.experienceAppears}>
						<Typography weightVariant={8} colorVariant={'primaryLight'} sizeVariant={4}>
							Experience
						</Typography>
					</SlideInFade>
				</AnchorLink>
				<AnchorLink href="#work" offset={100}>
					<SlideInFade enterTimeout={enterTimeout.workAppears}>
						<Typography weightVariant={8} colorVariant={'primaryLight'} sizeVariant={4}>
							Work
						</Typography>
					</SlideInFade>
				</AnchorLink>
				<AnchorLink href="#contact" >
					<SlideInFade enterTimeout={enterTimeout.contactAppears}>
						<Typography weightVariant={8} colorVariant={'primaryLight'} sizeVariant={4}>
							Contact
						</Typography>
					</SlideInFade>
				</AnchorLink>
				<SlideInFade enterTimeout={enterTimeout.resumeAppears}>
					<Button leftColor={'hsl(50, 100%, 50%)'} rightColor={'hsl(330, 100%, 50%)'}>
						Resume
					</Button>
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
	opacity: 0.8;
`;
