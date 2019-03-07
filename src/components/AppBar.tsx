import * as React from "react";
import {
	AppBar as GenericAppBar,
	Typography,
	GithubIcon,
	githubLink
} from "@nickjmorrow/react-component-library";
import { graphql, StaticQuery } from "gatsby";

export const AppBar: React.FC = () => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<GenericAppBar>
				<Typography
					sizeVariant={7}
					weightVariant={2}
					colorVariant={"primaryLight"}>
					{data.site.siteMetadata.title}
				</Typography>
				<a href={githubLink}>
					<GithubIcon colorVariant={"primaryLight"} />
				</a>
			</GenericAppBar>
		)}
	/>
);
