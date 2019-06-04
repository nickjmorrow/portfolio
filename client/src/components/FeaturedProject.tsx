import * as React from 'react'
import { Project } from '../types';
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import Img from "gatsby-image"

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
export const FeaturedProject : React.FC<{project: Project}> = ({project}) => {
	
	return <StaticQuery query={query} render={data => <Img fluid={data.file.childImageSharp.fluid} />} />
}