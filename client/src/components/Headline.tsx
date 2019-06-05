import * as React from 'react';
import styled from 'styled-components';
import { Button, Fade, StyleConstant, useThemeContext, Typography } from '@nickjmorrow/react-component-library';
import { SlideInFade } from './shared/SlideInFade';
import { enterTimeout } from '../constants';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export const query = graphql`
	query {
		file(relativePath: { eq: "cityscape.jpeg" }) {
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
		<div style={{ position: 'relative', height: '100vh' }}>
			<div style={{ position: 'relative' }}>
				<Image fluid={file.childImageSharp.fluid} />
			</div>
			<Fade in={true} appear={true} enterTimeout={enterTimeout.headlineAppears} transitionVariant={'slow'}>
				<HeadlineWrapper>
					<div style={{ marginBottom: spacing.ss4 }}>
						
							<Content spacing={spacing}>
								<div style={{ marginBottom: '16px' }}>
									<Typography colorVariant={'primaryLight'}>Hello, my name is</Typography>
								</div>
								<div>
									<Typography styleVariant={1} colorVariant={'primaryLight'}>Nicholas Morrow</Typography>
								</div>
								<div>
									<Typography colorVariant={'primaryLight'} sizeVariant={6}>I like working with data and building things.</Typography>
								</div>
							</Content>
						
					</div>
					<SlideInFade enterTimeout={enterTimeout.getInTouchAppears} transitionVariant={'medium'}>
						<Button useMargin={false}>Get In Touch</Button>
					</SlideInFade>
				</HeadlineWrapper>
				</Fade>
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
	background-color: rgba(0, 0, 0, 0.5);
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
	filter: brightness(100%) contrast(120%);
`;
