import * as React from "react"
import {
  AppBar as GenericAppBar,
  Typography,
  GithubIcon,
  Link,
  githubLink,
} from "@nickjmorrow/react-component-library"

export const AppBar: React.FC = () => {
  return (
    <GenericAppBar>
      <Typography
        sizeVariant={7}
        weightVariant={2}
        colorVariant={"primaryLight"}
      >
        Portfolio
      </Typography>
      <a href={githubLink}>
        <GithubIcon colorVariant={"primaryLight"} />
      </a>
    </GenericAppBar>
  )
}
