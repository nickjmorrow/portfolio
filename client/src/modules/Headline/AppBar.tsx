import {
	StyleConstant,
	Typography,
	useThemeContext,
	GithubIcon,
	LinkedInIcon,
	GITHUB_LINK,
	LINKED_IN_LINK,
	InvisibleLink,
	MailIcon,
	Button,
	Theme,
	MenuIcon,
} from '@nickjmorrow/react-component-library';
import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { enterTimeout } from '../../constants';
import { SlideInFade } from '../Core/SlideInFade';
import { withPrefix } from 'gatsby';
import Media from 'react-media';
import { SideMenu } from './SideMenu';
import { ResumeButton } from './ResumeButton';
import { Transition } from 'react-transition-group';

export const AppBar: React.FC = () => {
	const theme = useThemeContext();
	const { spacing } = theme;
	const [isOpen, setIsOpen] = React.useState(false);
	const navLinks = [
		{
			label: 'About',
			route: '#about',
			enterTimeout: enterTimeout.aboutAppears,
		},
		{
			label: 'Experience',
			route: '#experience',
			enterTimeout: enterTimeout.experienceAppears,
		},
		{
			label: 'Work',
			route: '#work',
			enterTimeout: enterTimeout.workAppears,
		},
		{
			label: 'Contact',
			route: '#contact',
			enterTimeout: enterTimeout.contactAppears,
		},
	];
	const unmounted = {
		transform: 'translateX(-320px)',
	};
	const mounted = {
		transform: 'translateX(0px)',
	};
	const transitionStyles = {
		entering: unmounted,
		entered: mounted,
		exiting: unmounted,
		exited: unmounted,
	};
	const sideMenuTimeout = 350;
	const colorVariant = 'secondaryDark';
	return (
		<Media
			queries={{
				large: '(min-width: 1200px)',
				mobile: `(max-width: 1199px)`,
			}}
		>
			{matches => (
				<>
					{matches.large && (
						<StyledAppBar spacing={spacing}>
							<SlideInFade enterTimeout={enterTimeout.appBarAppears}>
								<LeftWrapper theme={theme}>
									<InvisibleLink target="_blank" href={GITHUB_LINK}>
										<GithubIcon colorVariant={colorVariant} style={{ cursor: 'pointer' }} />
									</InvisibleLink>
									<InvisibleLink target="_blank" href={LINKED_IN_LINK}>
										<LinkedInIcon colorVariant={colorVariant} style={{ cursor: 'pointer' }} />
									</InvisibleLink>
									<InvisibleLink href={'mailto:njmorrow95@gmail.com'}>
										<MailIcon colorVariant={colorVariant} style={{ cursor: 'pointer' }} />
									</InvisibleLink>
								</LeftWrapper>
							</SlideInFade>
							<RightWrapper theme={theme}>
								{navLinks.map(nl => (
									<AnchorLink key={nl.label} href={nl.route} style={{ textDecoration: 'none' }}>
										<SlideInFade enterTimeout={nl.enterTimeout}>
											<LinkTypography>{nl.label}</LinkTypography>
										</SlideInFade>
									</AnchorLink>
								))}
								<SlideInFade enterTimeout={enterTimeout.resumeAppears}>
									<ResumeButton />
								</SlideInFade>
							</RightWrapper>
						</StyledAppBar>
					)}
					{matches.mobile && (
						<SlideInFade enterTimeout={enterTimeout.appBarAppears}>
							<header style={{ position: 'relative' }}>
								<StyledMenuIcon
									theme={theme}
									style={{
										cursor: 'pointer',
										position: 'absolute',
										zIndex: 2,
										top: theme.spacing.ss4,
										left: theme.spacing.ss4,
									}}
									onClick={() => setIsOpen(currentIsOpen => !currentIsOpen)}
								/>
								{
									<div style={{}} onClick={() => setIsOpen(false)}>
										<Transition in={isOpen} timeout={sideMenuTimeout} unmountOnExit={true}>
											{state => (
												<div
													style={{
														position: 'absolute',
														zIndex: 1,
														width: '40%',
														transition: `transform ${sideMenuTimeout}ms`,
														...transitionStyles[state],
													}}
												>
													<SideMenu navLinks={navLinks} />
												</div>
											)}
										</Transition>
									</div>
								}
							</header>
						</SlideInFade>
					)}
				</>
			)}
		</Media>
	);
};

const StyledMenuIcon = styled(MenuIcon)<{ theme: Theme }>`
	color: ${p => p.theme.colors.neutral.cs7};
	&: hover {
		color: ${p => p.theme.colors.neutral.cs5};
	}
`;

const StyledButton = styled(Button)<{ theme: Theme }>`
	border-color: ${p => p.theme.colors.neutral.cs1};
	&: hover {
		border-color: ${p => p.theme.colors.neutral.cs1};
		background-color: hsla(0, 0%, 100%, 30%);
		transition: ${p => p.theme.transitions.fast} all;
	}
	&: active {
		border-color: ${p => p.theme.colors.neutral.cs1};
	}
`;

const StyledTypography = styled(Typography)<{ theme: Theme }>`
	background: -webkit-linear-gradient(60deg, hsl(179.5, 93.4%, 75.6%), hsl(54.6, 100%, 58.9%));
	-webkit-background-clip: text;
	-webkit-text-fill-color: ${p => p.theme.colors.transparent};
`;

const LinkTypography: React.FC = ({ children }) => {
	const theme = useThemeContext();
	const StyledTypography = styled(Typography)<{ theme: Theme }>`
		color: ${p => p.theme.colors.neutral.cs6};
		&: hover {
			color: ${p => p.theme.colors.neutral.cs7};
		}
	`;
	return (
		<StyledTypography weightVariant={8} sizeVariant={4} theme={theme} style={{ textDecoration: 'none' }}>
			{children}
		</StyledTypography>
	);
};

const StyledAppBar = styled('header')<{ spacing: StyleConstant<'spacing'> }>`
	display: grid;
	flex-direction: row;
	justify-content: space-between;
	grid-auto-flow: column;
	grid-column-gap: ${p => p.spacing.ss8};
	height: ${p => p.spacing.ss24};
	align-items: center;
	padding: 0 120px;
	right: 0;
	left: 0;
	opacity: 0.8;
	z-index: 0;
`;

const RightWrapper = styled('div')<{ theme: Theme }>`
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: ${p => p.theme.spacing.ss8};
	align-items: center;
`;

const LeftWrapper = styled('div')<{ theme: Theme }>`
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 16px;
`;
