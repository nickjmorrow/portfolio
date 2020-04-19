import { StyleConstant, Theme, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import 'react-typist/dist/Typist.css';
import styled from 'styled-components';
import { accentColors } from '../../core/constants/constants';
import { AppBar } from './AppBar';
import './cursor.css';

export const Headline: React.FC = () => {
	const theme = useThemeContext();

	return (
		<Section>
			<AppBarWrapper>
				<AppBar />
			</AppBarWrapper>
			<HeadlineWrapper theme={theme}>
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
					style={{ display: 'block', marginBottom: '48px', lineHeight: theme.spacing.ss16 }}
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
			</HeadlineWrapper>
		</Section>
	);
};

const PrettyWordTypography = styled(Typography)`
	background: -webkit-linear-gradient(180deg, ${accentColors.colorOne}, ${accentColors.colorTwo});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const HeadlineWrapper = styled('div')<{ theme: Theme }>`
	display: flex;
	flex-direction: column;
	position: absolute;
	margin-left: 12%;
`;

const Section = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const AppBarWrapper = styled.div`
	align-self: flex-start;
	width: 100%;
`;
