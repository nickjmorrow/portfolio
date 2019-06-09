import * as React from 'react';
import styled from 'styled-components';
import { Fade, StyleConstant, useThemeContext, Typography, ArrowIcon } from '@nickjmorrow/react-component-library';
import { SlideInFade } from './shared/SlideInFade';
import { enterTimeout } from '../constants';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from './shared/Button';


export const query = graphql`
	query {
		file(relativePath: { eq: "headline.jpg" }) {
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
	const { spacing } = useThemeContext();
	const { file } = useStaticQuery(query);

	return (
		<div style={{ position: 'fixed', height: '100vh', width: '100%', zIndex: -1 }}>
			<ImageWrapper style={{ position: 'relative' }}>
				<Image fluid={file.childImageSharp.fluid} />
			</ImageWrapper>
			<Fade in={true} appear={true} enterTimeout={enterTimeout.headlineAppears} transitionVariant={'slow'}>
				<HeadlineWrapper>
					<div style={{ marginBottom: spacing.ss4 }}>
						
							<Content spacing={spacing}>
								
									<Typography colorVariant={'primaryLight'} style={{display: 'block', marginBottom: '16px'}}>Hello, my name is</Typography>
								
									<Typography styleVariant={1} colorVariant={'primaryLight'} style={{display: 'block'}}>Nicholas Morrow</Typography>
								
									<Typography colorVariant={'primaryLight'} sizeVariant={6} style={{display: 'block'}}>I like working with data and building things.</Typography>
								
							</Content>
						
					</div>
					<SlideInFade enterTimeout={enterTimeout.getInTouchAppears} transitionVariant={'medium'}>
						<Button leftColor={'white'} rightColor={'white'}>Get In Touch</Button>
					</SlideInFade>
				</HeadlineWrapper>
				</Fade>
				<div style={{position: 'absolute', bottom: 0, top: 'none !important', width: '100%', display: 'flex', justifyContent: 'center'}}>
					<SlideInFade enterTimeout={enterTimeout.downArrowIconAppears} style={{width: 'max-content', position: 'relative' }}>
						<ArrowIcon sizeVariant={4} colorVariant={'primaryLight'} style={{transform: 'rotate(90deg)'}}/>
					</SlideInFade>
				</div>
		</div>
	);
};

const HeadlineWrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	top: 180px;
	margin: 0 32px;
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
	z-index: -1;
	filter: brightness(60%) contrast(110%);

`;

const ImageWrapper = styled.div`
`;