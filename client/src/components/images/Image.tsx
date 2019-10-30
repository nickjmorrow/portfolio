import * as React from 'react';
import { MapClusteringImage } from './MapClusteringImage';
import { ReactComponentLibraryImage } from './ReactComponentLibraryImage';
import { graphql, useStaticQuery } from 'gatsby';
import { useThemeContext, Theme } from '@nickjmorrow/react-component-library';
import { StyledImage } from '../shared/StyledImage';

export const fluidImage = graphql`
	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 1000) {
				...GatsbyImageSharpFluid
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
	}
`;

export const Image: React.FC<{ fileName: string }> = ({ fileName }): React.ReactNode => {
	const theme = useThemeContext();
	const result = useStaticQuery(imageQuery);
	const { mapClustering, reactComponentLibrary, weirdWeather } = result;
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
	];

	const { component } = mappings.find(m => m.name === fileName)!;
	return <StyledImage fluid={component.childImageSharp.fluid} theme={theme} />;
};
