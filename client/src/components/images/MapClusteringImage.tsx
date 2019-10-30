import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useThemeContext } from '@nickjmorrow/react-component-library';
import { StyledImage } from '../shared/StyledImage';

export const MapClusteringImage: React.FC = () => {
	const { file } = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "map_clustering.png" }) {
				childImageSharp {
					# Specify the image processing specifications right in the query.
					# Makes it trivial to update as your page's design changes.
					fixed(width: 500, height: 300) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	const theme = useThemeContext();

	return <StyledImage fixed={file.childImageSharp.fixed} theme={theme} />;
};
