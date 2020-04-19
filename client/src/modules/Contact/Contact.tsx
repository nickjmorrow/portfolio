import {
	Button,
	InvisibleLink,
	StyleConstant,
	Typography,
	useThemeContext,
} from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../types';
import { HeaderTypography } from '../Core/Header';
import { DelayedSlideInFade } from '../Core/DelayedSlideInFade';
import { enterTimeout } from '../../core/constants';
import { ModuleWrapper } from '../Core/ModuleWrapper';
import { ModuleCard } from '../Core/ModuleCard';

export const Contact: React.FC = () => {
	const theme = useThemeContext();
	return (
		<ModuleWrapper>
			<ModuleCard>
				<div id="contact">
					<HeaderTypography>Contact</HeaderTypography>
					<Typography>
						Although I'm not actively looking for new opportunities, my inbox is always open. Whether for a
						potential project or just to connect, I'll try my best to answer your email!
					</Typography>
					<InvisibleLink
						style={{ textDecoration: 'none', marginTop: '32px' }}
						href={'mailto:njmorrow95@gmail.com'}
					>
						<StyledButton styleVariant={1} style={{ marginTop: '32px' }}>
							Send Message
						</StyledButton>
					</InvisibleLink>
				</div>
			</ModuleCard>
		</ModuleWrapper>
	);
};

const StyledButton = styled(Button)`
	margin: 0;
	background: linear-gradient(40deg, pink, purple);
	border: none;
	&: hover {
		filter: brightness(110%);
	}
`;

const ContactWrapper = styled('div')<{ theme: Theme }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: ${p => p.theme.spacing.ss16};
	margin: 0 auto;
	max-width: ${p => p.theme.spacing.ss192};
`;

const Form = styled('form')<{ spacing: StyleConstant<'spacing'> }>`
	display: grid;
	grid-auto-flow: row;
	grid-row-gap: ${p => p.spacing.ss8};
	width: 100%;
	margin: ${p => p.spacing.ss6} auto 0 auto;
`;

const TextArea = styled('textarea')<{
	border: StyleConstant<'border'>;
	colors: StyleConstant<'colors'>;
	typography: StyleConstant<'typography'>;
	spacing: StyleConstant<'spacing'>;
}>`
	border-radius: ${p => p.border.borderRadius.br1};
	background-color: ${p => p.colors.neutral.cs2};
	border: none;
	font-family: ${p => p.typography.fontFamily.default};
	font-size: ${p => p.typography.fontSizes.fs3};
	padding: ${p => p.spacing.ss3};
	width: 100%;
	min-height: 100px;
	&:focus {
		border: none;
		outline: none;
	}
`;

const Wrapper = styled('section')<{ theme: Theme }>`
	background-color: ${p => p.theme.colors.background};
	min-height: 100vh;
	width: 100%;
	position: relative;
`;
