import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useThemeContext } from '@nickjmorrow/react-component-library';
import { StyledImage } from './StyledImage';

export const fluidImage = graphql`
	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 700) {
				...GatsbyImageSharpFluid_noBase64
			}
		}
	}
`;

export const imageQuery = graphql`
	query {
		mapClustering: file(relativePath: { eq: "map_clustering.png" }) {
			...fluidImage
		}
		reactComponentLibrary: file(relativePath: { eq: "react_component_library.png" }) {
			...fluidImage
		}
		weirdWeather: file(relativePath: { eq: "weird_weather.png" }) {
			...fluidImage
		}
		weworkScheduler: file(relativePath: { eq: "wework_scheduler.png" }) {
			...fluidImage
		}
		breakbuilder: file(relativePath: { eq: "breakbuilder.png" }) {
			...fluidImage
		}
	}
`;

export const Image: React.FC<{ fileName: string; url: string; className?: string }> = ({
	fileName,
	url,
	className,
}): React.ReactNode => {
	const theme = useThemeContext();
	const result = useStaticQuery(imageQuery);
	const { mapClustering, reactComponentLibrary, weirdWeather, weworkScheduler, breakbuilder } = result;

	const handleClick = () => {
		window.location.href = url;
	};

	const mappings = [
		{
			name: 'map_clustering.png',
			component: mapClustering,
		},
		{
			name: 'react_component_library.png',
			component: reactComponentLibrary,
		},
		{
			name: 'weird_weather.png',
			component: weirdWeather,
		},
		{
			name: 'wework_scheduler.png',
			component: weworkScheduler,
		},
		{
			name: 'breakbuilder.png',
			component: breakbuilder,
		},
	];

	const { component } = mappings.find(m => m.name === fileName)!;
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			style={{ position: 'absolute', width: '100%', height: '100%' }}
		>
			<StyledImage
				className={className}
				onClick={handleClick}
				fluid={component.childImageSharp.fluid}
				theme={theme}
			/>
		</a>
	);
};
