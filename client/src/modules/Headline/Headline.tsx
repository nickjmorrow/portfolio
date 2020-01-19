import {
	ArrowIcon,
	Fade,
	StyleConstant,
	Theme,
	Typography,
	useThemeContext,
} from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import 'react-typist/dist/Typist.css';
import styled from 'styled-components';
import { enterTimeout } from '../../constants';
import { SlideInFade } from '../Core/SlideInFade';

export const query = graphql`
	query {
		file(relativePath: { eq: "space.jpg" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export const Headline: React.FC = () => {
	const theme = useThemeContext();
	const { file } = useStaticQuery(query);

	return (
		<section style={{ minHeight: '100vh' }}>
			<Fade in={true} appear={true} enterTimeout={enterTimeout.headlineAppears} transitionVariant={'slow'}>
				<HeadlineWrapper theme={theme}>
					<div style={{ marginBottom: theme.spacing.ss4 }}>
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
								<Typography
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
								</Typography>
							</div>
						</Content>
					</div>
				</HeadlineWrapper>
			</Fade>
		</section>
	);
};

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
