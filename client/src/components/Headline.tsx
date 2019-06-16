import { ArrowIcon, Fade, StyleConstant, Theme, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import styled from 'styled-components';
import { enterTimeout } from '../constants';
import { flickerWord } from '../utilities';
import { SlideInFade } from './shared/SlideInFade';

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
	const availableCallToActions = flickerWord(['beautiful', 'performant', 'secure', 'beautiful'], 40);
	const [index, setIndex] = React.useState(0);
	const incrementIndex = () => {
		const newIndex = index >= availableCallToActions.length - 1 ? 0 : index + 1;
		setIndex(newIndex);
	};

	React.useEffect(() => {
		if (index < 0) {
			return;
		}
		const id = setInterval(incrementIndex, 60);
		return () => clearInterval(id);
	}, [index]);

	return (
		<div style={{ position: 'fixed', height: '100vh', width: '100%', zIndex: -1}}>
			<ImageWrapper style={{ position: 'relative', zIndex: -10 }}>
				<Image fluid={file.childImageSharp.fluid} />
			</ImageWrapper>
			<Fade in={true} appear={true} enterTimeout={enterTimeout.headlineAppears} transitionVariant={'slow'}>
				<HeadlineWrapper theme={theme}>
					<div style={{ marginBottom: theme.spacing.ss4 }}>
						<Content spacing={theme.spacing}>
							<Typography
								colorVariant={'primaryLight'}
								sizeVariant={5}
								style={{ display: 'block', marginBottom: '24px' }}
							>
								Hello, my name is
							</Typography>

							<Typography
								weightVariant={7}
								styleVariant={1}
								sizeVariant={11}
								colorVariant={'primaryLight'}
								style={{ display: 'block', marginBottom: '48px' }}
							>
								Nicholas Morrow
							</Typography>

							<Typography
								weightVariant={7}
								colorVariant={'primaryLight'}
								sizeVariant={6}
								style={{ display: 'block' }}
							>
								Let's build something{' '}
								{availableCallToActions[index].split('').map(letter => {
									return (
										<Typography
											fontFamilyVariant={'monospace'}
											style={{
												color:
													letter === '#'
														? 'hsla(220,100%,90%,90%)'
														: 'hsla(310,100%,90%,90%)',
											}}
											sizeVariant={6}
											weightVariant={7}
										>
											{letter}
										</Typography>
									);
								})}
							</Typography>
						</Content>
					</div>
				</HeadlineWrapper>
			</Fade>
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					top: 'none !important',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<SlideInFade
					enterTimeout={enterTimeout.downArrowIconAppears}
					style={{ width: 'max-content', position: 'relative' }}
				>
					<ArrowIcon sizeVariant={4} colorVariant={'primaryLight'} style={{ transform: 'rotate(90deg)' }} />
				</SlideInFade>
			</div>
		</div>
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

const Image = styled(Img)`
	position: absolute !important;
	width: 100%;
	height: 100vh;
	z-index: -10;
	filter: brightness(60%) contrast(110%);
`;

const ImageWrapper = styled.div``;
