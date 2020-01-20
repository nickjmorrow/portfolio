import {
	ArrowIcon,
	Fade,
	StyleConstant,
	Theme,
	Typography,
	useThemeContext,
} from '@nickjmorrow/react-component-library';
import * as React from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import 'react-typist/dist/Typist.css';
import styled from 'styled-components';
import './cursor.css';
import { enterTimeout, accentColors } from '../../core/constants';

export const Headline: React.FC = () => {
	const theme = useThemeContext();

	return (
		<section style={{ height: '100vh', width: '100%', zIndex: -1 }}>
			<Fade in={true} appear={true} enterTimeout={enterTimeout.headlineAppears} transitionVariant={'slow'}>
				<HeadlineWrapper theme={theme}>
					<div style={{ marginBottom: theme.spacing.ss4, marginLeft: theme.spacing.ss16 }}>
						<Content spacing={theme.spacing}>
							<Typography
								colorVariant={'primaryDark'}
								sizeVariant={5}
								style={{ display: 'block', marginBottom: '24px' }}
							>
								Hello, my name is
							</Typography>

							<Typography
								weightVariant={7}
								styleVariant={'h1'}
								sizeVariant={11}
								colorVariant={'primaryDark'}
								style={{ display: 'block', marginBottom: '48px' }}
							>
								Nicholas Morrow
							</Typography>

							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<Typography
									weightVariant={7}
									colorVariant={'primaryDark'}
									sizeVariant={6}
									style={{ display: 'block' }}
								>
									Let's build something{' '}
								</Typography>
								<PrettyWordTypography
									colorVariant={'primaryDark	'}
									sizeVariant={6}
									weightVariant={7}
									style={{ marginLeft: '7px' }}
								>
									<TypistLoop interval={1000} style={{ display: 'inline' }}>
										{['beautiful', 'performant', 'secure'].map(text => (
											<Typist key={text} startDelay={0} style={{ display: 'inline' }}>
												{text}
												<Typist.Backspace count={text.length} delay={2000} />
											</Typist>
										))}
									</TypistLoop>
								</PrettyWordTypography>
							</div>
						</Content>
					</div>
				</HeadlineWrapper>
			</Fade>
		</section>
	);
};

const PrettyWordTypography = styled(Typography)`
	background: -webkit-linear-gradient(180deg, ${accentColors.colorOne}, ${accentColors.colorTwo});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const HeadlineWrapper = styled('div')<{ theme: Theme }>`
	height: 100vh;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	top: 180px;
	margin-left: ${p => p.theme.spacing.ss24};
	width: max-content;
	height: max-content;
	padding: 18px;
	border-radius: 6px;
`;

const Content = styled('div')<{ spacing: StyleConstant<'spacing'> }>`
	margin: ${p => p.spacing.ss6} 0px;
`;
