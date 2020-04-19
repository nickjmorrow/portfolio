import {
	GithubIcon,
	GITHUB_LINK,
	InvisibleLink,
	LinkedInIcon,
	LINKED_IN_LINK,
	MailIcon,
	MenuIcon,
	StyleConstant,
	Theme,
	Typography,
	useThemeContext,
} from '@nickjmorrow/react-component-library';
import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Media from 'react-media';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { enterTimeout, OVERRIDE_DESKTOP_SIZE, components } from '../../core/constants/constants';
import { SlideInFade } from '../Core/SlideInFade';
import { ResumeButton } from './ResumeButton';
import { SideMenu } from './SideMenu';

export const AppBar: React.FC = () => {
	const theme = useThemeContext();
	const { spacing } = theme;
	const [isOpen, setIsOpen] = React.useState(false);

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
				large: `(min-width: 1200px)`,
				mobile: `(max-width: 1199px)`,
			}}
		>
			{matches => (
				<>
					{(OVERRIDE_DESKTOP_SIZE || matches.large) && (
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
								{components.map(nl => (
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
					{!OVERRIDE_DESKTOP_SIZE && matches.mobile && (
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
													<SideMenu navLinks={components} />
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

const StyledTypography = styled(Typography)<{ theme: Theme }>`
	color: ${p => p.theme.colors.neutral.cs9};
	font-size: 18px;
	font-weight: 500;
	&: hover {
		color: ${p => p.theme.colors.neutral.cs7};
	}
`;

const LinkTypography: React.FC = ({ children }) => {
	const theme = useThemeContext();

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
	height: ${p => p.spacing.ss32};
	align-items: center;
	padding: 0 12%;
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
